const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuOverlay = document.querySelector('.menu__overlay'),
      menuList = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = "hidden";
});

function closeMenu() {
    menu.classList.remove('active');
    document.body.style.overflow = ""; 
}

closeElem.addEventListener('click', closeMenu);

menuList.addEventListener('click', closeMenu);

menu.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        closeMenu();
    }
});

const counters = document.querySelectorAll('.progress__counter'),
      lines = document.querySelectorAll('.progress__line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
