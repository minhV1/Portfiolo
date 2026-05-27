function getNavHeight() {
  const nav = document.querySelector('.nav');
  return nav ? nav.offsetHeight : 0;
}

function scrollToTarget(target) {
  const top = target.getBoundingClientRect().top + window.scrollY - getNavHeight();
  window.scrollTo({ top, behavior: 'smooth' });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      scrollToTarget(target);
    });
  });
}

initSmoothScroll();
