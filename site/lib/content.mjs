import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/** ko/ 루트의 메타 파일(콘텐츠 페이지로 만들지 않음) */
const META_FILES = new Set(['index.md', 'SUMMARY.md', '_terms.md']);

/** 챕터(order 100자리) 메타데이터 — frontmatter에 의존하지 않고 여기서 일관 관리 */
export const CHAPTERS = {
  1: { num: 'I', ko: '서론', en: 'Introduction' },
  2: { num: 'II', ko: '비즈니스 프로세스', en: 'Business Processes' },
  3: { num: 'III', ko: '사람과 문화', en: 'People & Culture' },
  4: { num: 'IV', ko: '기술 팀 관리', en: 'Technical Team Management' },
  5: { num: 'V', ko: '기술 아키텍처', en: 'Tech Architecture' },
  6: { num: 'VI', ko: '맺음말', en: 'Conclusion' },
  7: { num: '—', ko: '참고문헌', en: 'Book References' },
  8: { num: '—', ko: '용어집', en: 'Glossary' },
  9: { num: '—', ko: '저자·출판사 소개', en: 'About' },
};

/** 재귀적으로 .md 파일 경로(상대) 수집 */
function walkMarkdown(dir, koDir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkMarkdown(full, koDir, acc);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      acc.push(path.posix.relative(koDir, full.split(path.sep).join('/')));
    }
  }
  return acc;
}

/** relPath("a/b.md" 또는 "a/index.md") → url("a/b/" 또는 "a/") */
function relPathToUrl(relPath) {
  let p = relPath.replace(/\.md$/, '');
  if (p.endsWith('/index')) p = p.slice(0, -'index'.length); // a/index → a/
  else p = `${p}/`;
  if (!p.endsWith('/')) p += '/';
  return p;
}

/**
 * ko/ 디렉터리에서 모든 절을 읽어 정렬된 섹션 모델과 URL 맵을 만든다.
 * @returns {{ sections: Array, urlMap: Map<string,string> }}
 */
export function loadSections(koDir) {
  const koPosix = koDir.split(path.sep).join('/');
  const relPaths = walkMarkdown(koDir, koPosix);

  const sections = [];
  const urlMap = new Map();

  for (const relPath of relPaths) {
    const baseName = path.posix.basename(relPath);
    const isRoot = !relPath.includes('/');
    if (isRoot && META_FILES.has(baseName)) continue;

    const raw = fs.readFileSync(path.join(koDir, relPath), 'utf8');
    const { data, content } = matter(raw);
    if (typeof data.order !== 'number') continue; // order 없는 파일은 콘텐츠 아님

    // 제목(H1)은 article-head에서 따로 렌더하므로 본문 맨 앞 H1은 제거(중복 방지)
    const body = content.replace(/^\s*#\s+.*\r?\n+/, '');

    const url = relPathToUrl(relPath);
    const chapterNum = Math.floor(data.order / 100);

    sections.push({
      order: data.order,
      relPath,
      url,
      outPath: `${url}index.html`,
      title: data.title ?? baseName,
      title_en: data.title_en ?? '',
      chapterNum,
      chapter: CHAPTERS[chapterNum] ?? { num: '', ko: data.chapter ?? '', en: '' },
      source_lines: data.source_lines ?? '',
      status: data.status ?? '',
      body,
    });
    urlMap.set(relPath, url);
  }

  sections.sort((a, b) => a.order - b.order);
  return { sections, urlMap };
}

/** 섹션을 챕터별 그룹으로 묶는다(홈 카드용). order 순서 유지. */
export function groupByChapter(sections) {
  const groups = [];
  const index = new Map();
  for (const s of sections) {
    if (!index.has(s.chapterNum)) {
      const g = { chapterNum: s.chapterNum, chapter: s.chapter, sections: [] };
      index.set(s.chapterNum, g);
      groups.push(g);
    }
    index.get(s.chapterNum).sections.push(s);
  }
  return groups;
}
