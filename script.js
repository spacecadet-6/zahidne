const burgerButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__menu');
const burgerClose = document.querySelector('.burger__menu-close');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
});

document.querySelectorAll('.specs__block').forEach(block => {
    block.addEventListener('click', () => {
        block.classList.toggle('active');
    });
});