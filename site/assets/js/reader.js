// 읽기 진행바 + 사이드 TOC 스크롤스파이
(function () {
  var bar = document.getElementById('progress');

  function updateProgress() {
    if (!bar) return;
    var doc = document.documentElement;
    var scrollTop = window.scrollY || doc.scrollTop;
    var height = doc.scrollHeight - doc.clientHeight;
    var pct = height > 0 ? (scrollTop / height) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, pct)) + '%';
  }

  // 스크롤스파이: 본문 h2/h3 ↔ 사이드 TOC 링크
  var tocLinks = Array.prototype.slice.call(
    document.querySelectorAll('#toc a[data-id]')
  );
  var headings = tocLinks
    .map(function (a) {
      return document.getElementById(a.getAttribute('data-id'));
    })
    .filter(Boolean);

  function setActive(id) {
    tocLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-id') === id);
    });
  }

  var spy = null;
  if (headings.length && 'IntersectionObserver' in window) {
    var visible = new Set();
    spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) visible.add(en.target.id);
          else visible.delete(en.target.id);
        });
        // 화면에 보이는 헤딩 중 가장 위의 것을 활성화
        var current = null;
        for (var i = 0; i < headings.length; i++) {
          if (visible.has(headings[i].id)) {
            current = headings[i].id;
            break;
          }
        }
        if (current) setActive(current);
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );
    headings.forEach(function (h) {
      spy.observe(h);
    });
  }

  var ticking = false;
  window.addEventListener(
    'scroll',
    function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
  window.addEventListener('resize', updateProgress, { passive: true });
  updateProgress();
})();
