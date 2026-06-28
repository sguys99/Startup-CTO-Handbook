// Pagefind 전체 검색 — 모달 첫 오픈 시 지연 초기화
let initialized = false;

async function initSearch() {
  if (initialized) return;
  initialized = true;

  const base = window.__BASE__ || '';
  const host = document.getElementById('search-host');
  if (!host) return;

  // Pagefind UI 스타일 주입
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = `${base}/pagefind/pagefind-ui.css`;
  document.head.appendChild(css);

  try {
    // pagefind-ui.js 는 IIFE 로 window.PagefindUI 를 설정한다(ES export 없음)
    await import(`${base}/pagefind/pagefind-ui.js`);
    const PagefindUI = window.PagefindUI;
    if (typeof PagefindUI !== 'function') throw new Error('PagefindUI global not found');
    new PagefindUI({
      element: '#search-host',
      bundlePath: `${base}/pagefind/`,
      showSubResults: true,
      showImages: false,
      pageSize: 6,
      resetStyles: false,
      translations: {
        placeholder: '본문 검색…',
        zero_results: '“[SEARCH_TERM]”에 대한 결과가 없습니다',
        many_results: '“[SEARCH_TERM]” 검색 결과 [COUNT]건',
        one_result: '“[SEARCH_TERM]” 검색 결과 [COUNT]건',
        searching: '“[SEARCH_TERM]” 검색 중…',
      },
    });
  } catch (e) {
    host.innerHTML =
      '<p style="color:var(--ink-mute);font-size:0.9rem">검색 인덱스를 불러오지 못했습니다. 빌드(<code>npm run build</code>) 후 다시 시도하세요.</p>';
    console.error('Pagefind load failed:', e);
  }
}

window.__initSearch = initSearch;
