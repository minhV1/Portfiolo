const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const navLinkItems = document.querySelectorAll('.nav__link');

function onScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  highlightActiveSection();
}

function highlightActiveSection() {
  const scrollY = window.scrollY;

  document.querySelectorAll('section[id]').forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__link[href="#${id}"]`);

    if (!link) return;

    if (scrollY >= top && scrollY < bottom) {
      navLinkItems.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

function closeMenu() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

function initNav() {
  window.addEventListener('scroll', onScroll, { passive: true });
  navToggle.addEventListener('click', toggleMenu);

  navLinkItems.forEach(link => link.addEventListener('click', closeMenu));

  // Close drawer when clicking outside of it on mobile
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) closeMenu();
  });
}

initNav();
