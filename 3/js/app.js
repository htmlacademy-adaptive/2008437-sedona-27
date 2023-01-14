const mobileMenuButton = document.querySelector('.main-nav__toggle');
const mobileMenu = document.querySelector('.site-list');

const menuToggle = () => {
mobileMenuButton.classList.toggle('main-nav__toggle--closed');
mobileMenu.classList.toggle('site-list--opened');
}
