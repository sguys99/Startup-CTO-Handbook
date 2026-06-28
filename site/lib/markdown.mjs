import { Marked } from 'marked';
import path from 'node:path';

/** HTML 태그 제거 (slug·TOC 라벨용) */
function stripTags(html) {
  return html.replace(/<[^>]+>/g, '');
}

/** 한글·영문·숫자를 보존하는 slug 생성 */
function slugify(text) {
  return stripTags(text)
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '') // 문자/숫자/공백/하이픈만
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * 한 절(파일)의 본문 마크다운을 HTML로 렌더링한다.
 * - h2/h3 에 고유 id 부여 + 페이지 내 TOC 수집
 * - 내부 *.md 링크를 사이트 라우트로 재작성(base 접두)
 *
 * @returns {{ html: string, toc: Array<{level:number,id:string,text:string}> }}
 */
export function renderMarkdown(body, { currentRelPath, urlMap, base }) {
  const toc = [];
  const usedIds = new Map();

  const uniqueId = (raw) => {
    let id = slugify(raw) || 'section';
    if (usedIds.has(id)) {
      const n = usedIds.get(id) + 1;
      usedIds.set(id, n);
      id = `${id}-${n}`;
    } else {
      usedIds.set(id, 0);
    }
    return id;
  };

  const renderer = {
    heading(text, level) {
      if (level === 2 || level === 3) {
        const id = uniqueId(text);
        toc.push({ level, id, text: stripTags(text) });
        return `<h${level} id="${id}" class="ct-heading"><a class="ct-anchor" href="#${id}" aria-hidden="true">#</a>${text}</h${level}>\n`;
      }
      return `<h${level} class="ct-heading">${text}</h${level}>\n`;
    },
    link(href, title, text) {
      const rewritten = rewriteHref(href, { currentRelPath, urlMap, base });
      const isExternal = /^https?:\/\//.test(rewritten);
      const titleAttr = title ? ` title="${title}"` : '';
      const relAttr = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${rewritten}"${titleAttr}${relAttr}>${text}</a>`;
    },
  };

  const md = new Marked({ gfm: true, breaks: false });
  md.use({ renderer });
  const html = md.parse(body);
  return { html, toc };
}

/** 내부 .md 링크를 사이트 URL로 재작성. 외부/앵커 전용 링크는 그대로 둔다. */
function rewriteHref(href, { currentRelPath, urlMap, base }) {
  if (!href) return href;
  if (/^(https?:|mailto:|#)/.test(href)) return href;

  const [rawPath, anchor] = href.split('#');
  if (!rawPath.endsWith('.md')) return href;

  // 현재 파일 디렉터리 기준으로 상대 경로 해석
  const currentDir = path.posix.dirname(currentRelPath);
  const resolved = path.posix.normalize(path.posix.join(currentDir, rawPath));

  const url = urlMap.get(resolved);
  if (!url) return href; // 매핑 없으면 원본 유지

  const anchorPart = anchor ? `#${anchor}` : '';
  return `${base}/${url}${anchorPart}`;
}
