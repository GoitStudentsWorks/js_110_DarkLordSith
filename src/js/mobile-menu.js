
export const initMobileMenu = () => {
  const refs = {
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
    menu: document.querySelector('.js-menu-container'),
    body: document.querySelector('body'),
    menuLinks: document.querySelectorAll('.navigation__header-link'),
  };

  const toggleMenu = () => {
    refs.menu.classList.toggle('is-open');
    refs.body.classList.toggle('menu-open');
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuLinks.forEach(link => link.addEventListener('click', toggleMenu));
};

export const initHeaderScroll = () => {
  let lastScroll = 0;
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('header--hidden');
      return;
    }

    if (
      currentScroll > lastScroll &&
      !header.classList.contains('header--hidden')
    ) {
      header.classList.add('header--hidden');
    } else if (
      currentScroll < lastScroll &&
      header.classList.contains('header--hidden')
    ) {
      header.classList.remove('header--hidden');
    }
    lastScroll = currentScroll;
  });
};
