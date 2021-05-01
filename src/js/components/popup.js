const popupOpenBtn = document.querySelectorAll(`.popup-btn-js`);
const reviewOpenBtn = document.querySelector(`.review-btn-js`);
const popupContainer = document.querySelector(`.popup-container`);
const reviewContainer = document.querySelector(`.popup-container-review`);
const closeBtn = document.querySelectorAll(`.popup__close`);
const popupThanksBtn = document.querySelector(`.popup-thanks__btn`);


const openPopup = (container) => {
	document.body.classList.toggle(`scroll-off`);
	container.classList.toggle(`is-active`);
}

popupOpenBtn.forEach(el => {
	el.addEventListener(`click`, () => {
		openPopup(popupContainer);
	})
});

popupContainer.addEventListener(`click`, (event) => {
	if (!event.target.closest(`.popup`)) {
		openPopup(popupContainer)
	}
});

if (reviewContainer) {
	reviewContainer.addEventListener(`click`, (event) => {
		if (!event.target.closest(`.popup-review`)) {
			openPopup(reviewContainer)
		}
	});
}

closeBtn.forEach(el => {
	el.addEventListener(`click`, () => {
		if (popupContainer.classList.contains(`is-active`)) {
			openPopup(popupContainer);
		}
		if (reviewContainer && reviewContainer.classList.contains(`is-active`)) {
			openPopup(reviewContainer);
		}
	})
})

if (reviewOpenBtn) {
	reviewOpenBtn.addEventListener(`click`, () => {
		openPopup(reviewContainer);
	})
}



popupThanksBtn.addEventListener(`click`, () => {
	popupContainerThanks.classList.remove(`is-active`);
	body.classList.remove(`scroll-off`);
});