const heroSlider = document.querySelector(`.hero__container`);
const servicesSlider = document.querySelector(`.services__content`);
const portfolioSlider = document.querySelector(`.portfolio__content`);
const reviewsSlider = document.querySelector(`.reviews__content`);

const updateSlider = (slider) => {
	slider.update()
}

if (heroSlider) {
	const slider1 = new Swiper(heroSlider, {
		spaceBetween: 30,
		loop: true,
		slidesPerView: 1,
		navigation: {
			prevEl: `.swiper-button-prev--hero`,
			nextEl: `.swiper-button-next--hero`
		},
		scrollbar: {
			el: `.swiper-scrollbar--hero`
		}
	});
}

let slider2;

const slider3 = new Swiper(portfolioSlider, {
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			slidesPerColumn: 2,
		},
		1024: {
			slidesPerView: 3,
			slidesPerColumn: 2,
		}
	},

	navigation: {
		prevEl: `.swiper-button-prev--portfolio`,
		nextEl: `.swiper-button-next--portfolio`
	},
	scrollbar: {
		el: `.swiper-scrollbar--portfolio`
	}
});

const slider4 = new Swiper(reviewsSlider, {
	slidesPerView: "auto",
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1300: {
			slidesPerView: 3
		}
	},
	navigation: {
		prevEl: `.swiper-button-prev--reviews`,
		nextEl: `.swiper-button-next--reviews`
	},
	scrollbar: {
		el: `.swiper-scrollbar--reviews`
	}
});

const sliderInit = () => {
	if (window.innerWidth <= 768 && servicesSlider.dataset.mobile == 'false') {
		slider2 = new Swiper(servicesSlider, {
			spaceBetween: 30,
			loop: true,
			slidesPerView: 1,
			slideClass: `card`,
			scrollbar: {
				el: `.swiper-scrollbar--services`
			}
		});
		servicesSlider.dataset.mobile = "true";
	}

	if (servicesSlider && window.innerWidth > 768) {
		servicesSlider.dataset.mobile = 'false';

		if (servicesSlider.classList.contains(`swiper-container-initialized`)) {
			slider2.destroy();
		}
	}
};

if (servicesSlider) {
	sliderInit();

	window.addEventListener(`resize`, () => {
		sliderInit();
	
	});
}



