(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.body,
    menuLinks: document.querySelectorAll('[data-menu] a[href^="#"]'),
  };

  const toggleMenu = () => {
    const isMenuOpen = refs.menu.classList.toggle('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', isMenuOpen);

    if (isMenuOpen) {
      refs.body.classList.add('no-scroll');
    } else {
      refs.body.classList.remove('no-scroll');
    }
  };

  const closeMenuOnLinkClick = event => {
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      toggleMenu();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.menuLinks.forEach(link => {
    link.addEventListener('click', closeMenuOnLinkClick);
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (e.matches) {
      refs.menu.classList.remove('is-open');
      refs.openMenuBtn.setAttribute('aria-expanded', false);
      refs.body.classList.remove('no-scroll');
    }
  });
})();
