var navMain = document.querySelector('.menu');
var navToggle = document.querySelector('.menu__button');
var logoDisplay = document.querySelector('.menu__logo');

  navMain.classList.remove('menu--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('menu--closed')) {
      navMain.classList.remove('menu--closed');
      navMain.classList.add('menu--opened');
    } else {
      navMain.classList.add('menu--closed');
      navMain.classList.remove('menu--opened');
    }
  });

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('menu--closed')) {
      logoDisplay.classList.remove('menu__logo--closed');
      logoDisplay.classList.add('menu__logo--opened');
    } else {
      logoDisplay.classList.remove('menu__logo--opened');
      logoDisplay.classList.add('menu__logo--closed');
    }
  });
