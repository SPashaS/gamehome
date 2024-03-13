// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose, menuOpen } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const header = document.querySelector('.header');

header.addEventListener('click', function (e) {
  let target = e.target;

  let menuItem = target.classList.contains('menu-item__item-title');
  let menuItemOpen = target.closest('.submenu-open');
  if (menuItem && !menuItemOpen) {
    closeOpenSubMenu();
    target.closest('.menu-item').classList.add('submenu-open');
  } else if (menuItem && menuItemOpen) {
    target.closest('.menu-item').classList.remove('submenu-open');
  }
});
export function closeOpenSubMenu() {
  let submenuOpen = document.querySelector('.submenu-open');
  if (submenuOpen) {
    submenuOpen.classList.remove('submenu-open');
  }
}



const btnMenuOpen = document.querySelector(".menu__open");
if (btnMenuOpen) {
  btnMenuOpen.addEventListener("click", function (e) {
    menuOpen();
  });
};


const btnMenuClose = document.querySelector(".menu__close");
if (btnMenuClose) {
  btnMenuClose.addEventListener("click", function (e) {
    menuClose();
  });
  let menuBody = document.querySelector(".menu__body");
  menuBody.addEventListener("click", function (e) {
    let target = e.target;
    let menuNav = target.classList.contains('menu__nav');
    let menuList = target.classList.contains('menu__list');
    
    if (menuBody && !menuNav && !menuList) {
      menuClose();
    }
  
  });
};




const btnSearch = document.querySelector(".search-block__btn");
if (btnSearch) {
  btnSearch.addEventListener("click", function (e) {
    document.documentElement.classList.toggle("search-open");
    // _slideDown
  });
};





// menuBody.addEventListener("click", function (e) {
//   let target = e.target;
//   let product = target.classList.contains('product');
// }



const page = document.querySelector('.page');

page.onmouseover = page.onmouseout = handler;
function handler(event) {
  let cardProduct = event.target.closest('.product');
  if (cardProduct) {
    if (event.type == 'mouseover') {
      cardProduct.classList.add('product_hover');
    } else if (event.type == 'mouseout') {
      cardProduct.classList.remove('product_hover');
    }
  }

}



