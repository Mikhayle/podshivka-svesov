const callbackForm = document.querySelector(`.popup__form`);
const reviewForm = document.querySelector(`.popup-review__form`);
const popupContainerThanks = document.querySelector(`.popup-container-thanks`);
const body = document.body;

let inputTel = document.querySelectorAll(`.input-tel`);
let im = new Inputmask('+7 (999) 999-99-99');

im.mask(inputTel);


let validateForms = (selector, rules) => {
	new JustValidate(selector, {
		rules: rules,
		messages: {
			name: {
				required: "Это поле обязательно для заполнения",
				minLength: "Поле должно содержать минимум 2 символа"
			},
			tel: {
				required: "Это поле обязательно для заполнения",
				minLength: "Поле должно содержать минимум 2 символа"
			},
			comment: {
				required: "Это поле обязательно для заполнения",
				minLength: "Поле должно содержать минимум 2 символа"
			},
		},
		submitHandler: function (form) {
			let formData = new FormData(form);
			const action = document.querySelector(`${selector}`).getAttribute('action');
			console.log(action);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						popupContainer.classList.remove(`is-active`);
						setTimeout(() => {
							body.classList.add(`scroll-off`);
							popupContainerThanks.classList.add(`is-active`);
						}, 300);
					};
				}
			};

			xhr.open('POST', `${action}`, true);
			xhr.send(formData);
			form.reset();
		}
	});
};


validateForms('.popup__form', {
	name: {
		required: true,
		minLength: 2,
	},
	tel: {
		required: true,
		minLength: 11,
	},
});


if (reviewForm) {
	validateForms(`.popup-review__form`, {
		name: {
			required: true,
			minLength: 2,
		},
		comment: {
			required: true,
			minLength: 2,
		},
	});
}
