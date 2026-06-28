// 테마 토글 + 모바일 내비 + 검색 모달 트리거 (UI 크롬)
(function () {
  var root = document.documentElement;

  // ----- 라이트/다크 토글 -----
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }

  // ----- 모바일 내비 -----
  var navToggle = document.getElementById('nav-toggle');
  var navClose = document.getElementById('nav-close');
  var mobileNav = document.getElementById('mobile-nav');
  function openNav() {
    if (!mobileNav) return;
    mobileNav.classList.add('open');
    navToggle && navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    if (!mobileNav) return;
    mobileNav.classList.remove('open');
    navToggle && navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  navToggle && navToggle.addEventListener('click', openNav);
  navClose && navClose.addEventListener('click', closeNav);
  mobileNav &&
    mobileNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') closeNav();
    });

  // ----- 검색 모달 -----
  var modal = document.getElementById('search-modal');
  var openBtn = document.getElementById('search-open');
  var closeBtn = document.getElementById('search-close');
  function openSearch() {
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    window.__initSearch && window.__initSearch();
    var input = modal.querySelector('input');
    if (input) setTimeout(function () { input.focus(); }, 60);
  }
  function closeSearch() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
  window.__openSearch = openSearch;
  openBtn && openBtn.addEventListener('click', openSearch);
  closeBtn && closeBtn.addEventListener('click', closeSearch);
  modal &&
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeSearch();
    });

  // ----- 키보드 단축키 -----
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeSearch();
      closeNav();
    }
    if (
      (e.key === '/' || (e.key === 'k' && (e.metaKey || e.ctrlKey))) &&
      !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)
    ) {
      e.preventDefault();
      openSearch();
    }
  });
})();
