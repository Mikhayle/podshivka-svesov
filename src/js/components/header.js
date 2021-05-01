const burger = document.querySelector(`.burger`);
const menuWrapper = document.querySelector(`.header__menu-wrapper`);
const menu = document.querySelector(`.header__menu`);
const menuItem = document.querySelectorAll(`.header__menu-item`);


const openMenuHandler = () => {
  document.body.classList.toggle(`scroll-off`);
  burger.classList.toggle(`is-active`);

  if (!menuWrapper.classList.contains(`is-active`)) {
    menuWrapper.classList.toggle(`is-active`);
  } else {
    setTimeout(() => {
      menuWrapper.classList.toggle(`is-active`);
    }, 400)
  }

  if (menu.classList.contains(`is-active`)) {
    menu.classList.toggle(`is-active`);
  } else {
    setTimeout(() => {
      menu.classList.toggle(`is-active`);
    }, 400)
  }
}

burger.addEventListener(`click`, () => {
  openMenuHandler();
});

menuItem.forEach(item => {
  if (window.innerWidth <=1024) {
    item.addEventListener(`click`, () => {
      openMenuHandler();
    })
  }
})
