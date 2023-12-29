const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__nav');
const displayAct = document.querySelector('menu__nav')

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__nav--active');
})