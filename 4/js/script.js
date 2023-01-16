const navMainMenu = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMainMenu.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMainMenu.classList.contains('main-nav--closed')) {
    navMainMenu.classList.remove('main-nav--closed');
    navMainMenu.classList.add('main-nav--opened');
  } else {
    navMainMenu.classList.add('main-nav--closed');
    navMainMenu.classList.remove('main-nav--opened');
  }
});
