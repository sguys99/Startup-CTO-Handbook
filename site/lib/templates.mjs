import { groupByChapter } from './content.mjs';

/* ---------- 인라인 SVG 아이콘 ---------- */
const ICON = {
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1 0-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></svg>',
};

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------- 공통 머리/꼬리 ---------- */
function header(ctx) {
  return `<a class="skip-link" href="#main">본문으로 건너뛰기</a>
<div class="progress" id="progress" aria-hidden="true"></div>
<header class="site-header">
  <div class="wrap">
    <a class="brand" href="${ctx.url('')}">
      <span class="brand-mark">스타트업 CTO 핸드북</span>
      <span class="brand-sub desktop-only">한국어판</span>
    </a>
    <div class="header-actions">
      <button class="icon-btn" id="search-open" aria-label="검색 열기" title="검색 (/)">${ICON.search}</button>
      <a class="icon-btn" href="${ctx.repoUrl}" target="_blank" rel="noopener noreferrer" aria-label="GitHub 저장소">${ICON.github}</a>
      <button class="icon-btn theme-toggle" id="theme-toggle" aria-label="라이트/다크 모드 전환">
        <span class="sun">${ICON.sun}</span><span class="moon">${ICON.moon}</span>
      </button>
      <button class="icon-btn nav-toggle" id="nav-toggle" aria-label="메뉴 열기" aria-expanded="false">${ICON.menu}</button>
    </div>
  </div>
</header>`;
}

function mobileNav(ctx) {
  const groups = groupByChapter(ctx.sections);
  const items = groups
    .map(
      (g) => `<h2>${esc(g.chapter.ko)}</h2>
${g.sections.map((s) => `<a href="${ctx.url(s.url)}">${esc(s.title)}</a>`).join('\n')}`
    )
    .join('\n');
  return `<nav class="mobile-nav" id="mobile-nav" aria-label="전체 목차">
  <div class="close-row"><button class="icon-btn" id="nav-close" aria-label="메뉴 닫기">${ICON.close}</button></div>
  <a href="${ctx.url('')}" style="font-weight:600">홈으로</a>
  ${items}
</nav>`;
}

function footer(ctx) {
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <h3>스타트업 CTO 핸드북</h3>
        <p>Zach Goldberg의 <em>The Startup CTO's Handbook</em>을 자연스러운 한국어로 옮긴 번역본입니다. 고성과 엔지니어링 팀을 이끄는 데 필요한 핵심 역량과 모범 사례를 다룹니다.</p>
      </div>
      <div>
        <div class="col-title">바로가기</div>
        <ul>
          <li><a href="${ctx.url('')}">홈 · 목차</a></li>
          <li><a href="${ctx.url('08-glossary/')}">용어집</a></li>
          <li><a href="${ctx.url('07-references/')}">참고문헌</a></li>
        </ul>
      </div>
      <div>
        <div class="col-title">원문 · 저장소</div>
        <ul>
          <li><a href="${ctx.repoUrl}" target="_blank" rel="noopener noreferrer">GitHub 저장소</a></li>
          <li><a href="${ctx.repoUrl}/blob/main/StartupCTOHandbook.md" target="_blank" rel="noopener noreferrer">영문 원문</a></li>
          <li><a href="https://zachgoldberg.com" target="_blank" rel="noopener noreferrer">저자 웹사이트</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© Zach Goldberg · 한국어 번역본은 원저작권과 라이선스(<a href="${ctx.repoUrl}/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">LICENSE</a>)를 따릅니다. · 번역/배포 Kwang Myung Yu</span>
      <span>상업적 목적으로 사용하지 않고 출처를 표기하는 한 자유롭게 복사·수정·재배포할 수 있습니다.</span>
    </div>
  </div>
</footer>`;
}

function searchModal() {
  return `<div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-label="사이트 검색">
  <div class="search-panel">
    <div class="search-panel-head">
      <span>본문 전체 검색</span>
      <button class="icon-btn" id="search-close" aria-label="검색 닫기">${ICON.close}</button>
    </div>
    <div id="search-host"></div>
  </div>
</div>`;
}

/* ---------- 레이아웃 셸 ---------- */
export function layout({ ctx, title, description, bodyClass = '', main }) {
  const fullTitle = title ? `${title} · 스타트업 CTO 핸드북` : '스타트업 CTO 핸드북 (한국어)';
  return `<!doctype html>
<html lang="ko" data-theme="light">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${esc(fullTitle)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:image" content="${ctx.url('assets/img/cover.png')}" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="${ctx.url('assets/img/favicon.svg')}" type="image/svg+xml" />
<script>(function(){try{var t=localStorage.getItem('theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Nanum+Myeongjo:wght@400;700;800&display=swap" />
<link rel="stylesheet" href="${ctx.url('assets/css/styles.css')}" />
</head>
<body class="${bodyClass}">
${header(ctx)}
${mobileNav(ctx)}
<main id="main">
${main}
</main>
${footer(ctx)}
${searchModal()}
<script>window.__BASE__=${JSON.stringify(ctx.base)};</script>
<script src="${ctx.url('assets/js/theme.js')}" defer></script>
<script src="${ctx.url('assets/js/reader.js')}" defer></script>
<script type="module" src="${ctx.url('assets/js/search.js')}"></script>
</body>
</html>`;
}

/* ---------- 홈 (랜딩) ---------- */
export function homePage({ ctx, book }) {
  const groups = groupByChapter(ctx.sections);
  const firstUrl = ctx.sections[0] ? ctx.url(ctx.sections[0].url) : ctx.url('');

  const cards = groups
    .map((g, i) => {
      const single = g.sections.length === 1;
      const cls = single ? 'chapter-card is-single' : 'chapter-card';
      const inner = single
        ? `<a class="card-link" href="${ctx.url(g.sections[0].url)}">읽기 →</a>`
        : `<ol>${g.sections
            .map((s) => `<li><a href="${ctx.url(s.url)}">${esc(s.title)}</a></li>`)
            .join('')}</ol>`;
      return `<article class="${cls} reveal" style="animation-delay:${0.04 * i}s">
        <div class="chapter-numeral">${esc(g.chapter.num)}</div>
        <h3>${esc(g.chapter.ko)}</h3>
        <div class="ch-en">${esc(g.chapter.en)}</div>
        ${inner}
      </article>`;
    })
    .join('\n');

  const main = `<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-text">
      <p class="eyebrow reveal reveal-1">고성과 엔지니어링 팀을 위한 핸드북</p>
      <h1 class="hero-title reveal reveal-2">${esc(book.title)}<span class="en">${esc(book.title_en)}</span></h1>
      <p class="hero-sub reveal reveal-3">${esc(book.subtitle)} — 채용과 문화, 기술 부채와 아키텍처, 데브옵스와 보안까지, 스타트업 CTO가 마주하는 현실적인 의사결정을 한 권에 담았습니다.</p>
      <p class="hero-meta reveal reveal-3">지은이 · <strong>${esc(book.author)}</strong></p>
      <p class="hero-meta reveal reveal-3">번역/배포 · <strong>KMYU</strong></p>
      <div class="hero-cta reveal reveal-4">
        <a class="btn btn-primary" href="${firstUrl}">${ICON.arrowRight}<span>처음부터 읽기</span></a>
        <a class="btn btn-ghost" href="${ctx.repoUrl}" target="_blank" rel="noopener noreferrer">${ICON.github}<span>GitHub</span></a>
      </div>
    </div>
    <div class="hero-cover reveal reveal-2">
      <img src="${ctx.url('assets/img/cover.png')}" alt="《스타트업 CTO 핸드북》 표지" width="320" height="480" />
    </div>
  </div>
</section>

<section class="toc-section">
  <div class="wrap">
    <div class="section-head">
      <h2>목차</h2>
    </div>
    <div class="card-grid">
      ${cards}
    </div>
  </div>
</section>`;

  return layout({
    ctx,
    title: '',
    description: `${book.title} — ${book.subtitle}. Zach Goldberg의 The Startup CTO's Handbook 한국어 번역본.`,
    bodyClass: 'page-home',
    main,
  });
}

/* ---------- 본문 (절) 페이지 ---------- */
export function sectionPage({ ctx, section, html, toc, prev, next }) {
  const hasToc = toc.length > 0;
  const tocList = hasToc
    ? `<aside class="toc-rail" aria-label="이 절의 목차">
        <div class="toc-title">이 절에서</div>
        <ul id="toc">
          ${toc
            .map(
              (t) =>
                `<li class="lvl-${t.level}"><a href="#${t.id}" data-id="${t.id}">${esc(t.text)}</a></li>`
            )
            .join('\n')}
        </ul>
      </aside>`
    : '';

  const srcLink = section.source_lines
    ? `<a class="src-link" href="${ctx.sourceUrl(section.source_lines)}" target="_blank" rel="noopener noreferrer">${ICON.ext} 영문 원문 보기 (${esc(section.source_lines)}행)</a>`
    : '';

  const pagerItem = (s, dir) => {
    if (!s) return `<span class="empty"></span>`;
    const cls = dir === 'prev' ? 'prev' : 'next';
    const label = dir === 'prev' ? '이전' : '다음';
    const icon = dir === 'prev' ? ICON.arrowLeft : ICON.arrowRight;
    return `<a class="${cls}" href="${ctx.url(s.url)}">
      <span class="dir">${icon} ${label}</span>
      <span class="ttl">${esc(s.title)}</span>
    </a>`;
  };

  const main = `<div class="wrap reader${hasToc ? '' : ' no-toc'}">
  <article data-pagefind-body>
    <header class="article-head reveal reveal-1">
      <span class="crumb">
        <a href="${ctx.url('')}">목차</a>
        <span style="color:var(--ink-mute)">/</span>
        <span class="eyebrow" style="text-transform:none;letter-spacing:0.04em">${esc(section.chapter.ko)}</span>
      </span>
      <h1>${esc(section.title)}</h1>
      ${section.title_en ? `<span class="title-en">${esc(section.title_en)}</span>` : ''}
      ${srcLink}
    </header>
    <div class="prose reveal reveal-2">
${html}
    </div>
    <nav class="pager" aria-label="절 이동" data-pagefind-ignore>
      ${pagerItem(prev, 'prev')}
      ${pagerItem(next, 'next')}
    </nav>
  </article>
  ${tocList}
</div>`;

  const plain = section.body.replace(/[#*_>`\-]/g, ' ').replace(/\s+/g, ' ').slice(0, 160);
  return layout({
    ctx,
    title: section.title,
    description: `${section.title}${section.title_en ? ` (${section.title_en})` : ''} — ${plain}`,
    bodyClass: 'page-section',
    main,
  });
}
