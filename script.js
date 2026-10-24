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

const splide = new Splide('.gallery__slider', {
    type: 'loop',
    autoWidth: true,
    gap: '16px',
    perMove: 1,
    pagination: false,
    arrows: false,
    speed: 600,
});

splide.mount();

document.querySelector('.gallery__arrow-left').addEventListener('click', () => {
    splide.go('<');
});

document.querySelector('.gallery__arrow-right').addEventListener('click', () => {
    splide.go('>');
});

document.addEventListener('DOMContentLoaded', () => {
    
    const partnersItems = document.querySelectorAll('.partners__list-item');
    const partnersImages = document.querySelectorAll('.partners__img');

    partnersItems[0].classList.add('partners__list-item--active');
    partnersImages[0].classList.add('partners__img-active');

    partnersItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            partnersItems.forEach(el => el.classList.remove('partners__list-item--active'));
            partnersImages.forEach(img => img.classList.remove('partners__img-active'));

            item.classList.add('partners__list-item--active');
            partnersImages[index].classList.add('partners__img-active');
        });
    });
});