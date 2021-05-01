const mainTitle = document.querySelector(`.main-title--head`);

const appearanceTitle = () => {
	if (window.innerWidth < 576) {
		mainTitle.classList.remove(`visually-hidden`);
	} else {
		mainTitle.classList.add(`visually-hidden`);
	}
}

appearanceTitle();

window.addEventListener(`resize`, appearanceTitle)
