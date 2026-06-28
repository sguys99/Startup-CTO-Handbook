import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import { loadSections } from './lib/content.mjs';
import { renderMarkdown } from './lib/markdown.mjs';
import { homePage, sectionPage } from './lib/templates.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const KO_DIR = path.join(ROOT, 'ko');
const DIST = path.join(ROOT, 'dist');
const ASSETS_SRC = path.join(__dirname, 'assets');
const COVER_SRC = path.join(ROOT, 'published_files', 'cover.png');

const REPO_URL = 'https://github.com/sguys99/Startup-CTO-Handbook';

// BASE: 로컬 미리보기는 '', 배포(GitHub Pages 프로젝트 페이지)는 '/Startup-CTO-Handbook'
const BASE = (process.env.BASE || '').replace(/\/$/, '');

const joinUrl = (p) => `${BASE}/${p}`.replace(/([^:])\/{2,}/g, '$1/');

function sourceUrl(sourceLines) {
  const [start, end] = String(sourceLines).split('-');
  const anchor = end ? `#L${start}-L${end}` : `#L${start}`;
  return `${REPO_URL}/blob/main/StartupCTOHandbook.md${anchor}`;
}

function readBookMeta() {
  const idx = path.join(KO_DIR, 'index.md');
  const { data } = matter(fs.readFileSync(idx, 'utf8'));
  return {
    title: data.title ?? '스타트업 CTO 핸드북',
    title_en: data.title_en ?? "The Startup CTO's Handbook",
    subtitle: data.subtitle ?? '고성과 엔지니어링 팀을 위한 핵심 역량과 모범 사례',
    subtitle_en: data.subtitle_en ?? '',
    author: data.author ?? '잭 골드버그(Zach Goldberg)',
  };
}

function writePage(url, html) {
  const outPath = path.join(DIST, url === '' ? 'index.html' : path.join(url, 'index.html'));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html, 'utf8');
}

function copyAssets() {
  fs.cpSync(ASSETS_SRC, path.join(DIST, 'assets'), { recursive: true });
  const imgDir = path.join(DIST, 'assets', 'img');
  fs.mkdirSync(imgDir, { recursive: true });
  if (fs.existsSync(COVER_SRC)) {
    fs.copyFileSync(COVER_SRC, path.join(imgDir, 'cover.png'));
  } else {
    console.warn('⚠️  표지 이미지를 찾지 못했습니다:', COVER_SRC);
  }
  // 파비콘 (러스트 컬러 모노그램)
  const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#b1492a"/><text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="Georgia, serif" font-size="34" font-style="italic" fill="#fffaf4">C</text></svg>`;
  fs.writeFileSync(path.join(imgDir, 'favicon.svg'), favicon, 'utf8');
}

function build() {
  const t0 = Date.now();
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });

  const { sections, urlMap } = loadSections(KO_DIR);
  const book = readBookMeta();

  const ctx = {
    base: BASE,
    repoUrl: REPO_URL,
    sections,
    url: joinUrl,
    sourceUrl,
  };

  // 홈
  writePage('', homePage({ ctx, book }));

  // 절 페이지
  let tocTotal = 0;
  sections.forEach((section, i) => {
    const { html, toc } = renderMarkdown(section.body, {
      currentRelPath: section.relPath,
      urlMap,
      base: BASE,
    });
    tocTotal += toc.length;
    const prev = sections[i - 1] ?? null;
    const next = sections[i + 1] ?? null;
    writePage(section.url.replace(/\/$/, ''), sectionPage({ ctx, section, html, toc, prev, next }));
  });

  copyAssets();

  // 검색 인덱스에서 헤더/푸터/내비 제외용 data-pagefind-body 표시는 본문 .prose에 적용됨
  const dt = ((Date.now() - t0) / 1000).toFixed(2);
  console.log('────────────────────────────────────────');
  console.log(`✅ 빌드 완료  (BASE="${BASE || '/'}")`);
  console.log(`   페이지: ${sections.length + 1} (홈 1 + 절 ${sections.length})`);
  console.log(`   사이드 TOC 항목: ${tocTotal}`);
  console.log(`   출력: ${path.relative(ROOT, DIST)}/`);
  console.log(`   소요: ${dt}s`);
  console.log('────────────────────────────────────────');
}

build();
