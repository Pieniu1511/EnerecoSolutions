const burgerBtn = document.querySelector('.burger-icon');
const hiddenMenu = document.querySelector('.hidden-menu');
const closeBtn = document.querySelector('.close-menu');
const cards = document.querySelectorAll('.card');
const dropdown = document.querySelector('.nav-item--dropdown');
const offerBtn = document.querySelector('.offer');
const offerOptions = document.querySelector('.offer-options');
const body = document.querySelector('body');
const logos = document.querySelectorAll('.mark');
const i = document.querySelector('.offer i');
const form = document.querySelector('.contact-form');
const submitButton = document.querySelector('.contact-form-btn');
const alert = document.querySelector('.contact-form-alert');
const alertText = document.querySelector('.checkbox-text');

let currentLogo = 0;

if (logos.length !== 0) {
	logos[currentLogo].classList.add('active');

	setInterval(() => {
		logos[currentLogo].classList.remove('active');
		currentLogo = (currentLogo + 1) % logos.length;
		logos[currentLogo].classList.add('active');
	}, 3000);
}

const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');
dropdownMenu.innerHTML =
	'<a href="instalacje-fotowoltaiczne.html">Instalacje fotowoltaiczne</a><a href="pompy-ciepla.html">Pompy ciepła</a><a href="broker-energii.html">Broker energii</a><a href="dystrybucja.html">Dystrybucja</a>';
dropdown.appendChild(dropdownMenu);

cards.forEach(card => {
	const btn = card.querySelector('.plus-btn');
	const bottom = card.querySelector('.card-bottom');

	btn.addEventListener('click', () => {
		bottom.style.display === 'none' ? 'block' : 'none';
	});
});

const showMenu = () => {
	hiddenMenu.style.transform = 'translateX(0)';
	body.style.overflow = 'hidden';
};

const closeMenu = () => {
	hiddenMenu.style.transform = 'translateX(100%)';
	offerOptions.classList.remove('show-options');
	body.style.overflow = 'auto';
    i.classList.remove('rotate');
};

burgerBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);
offerBtn.addEventListener('click', () => {
	i.classList.toggle('rotate');
	offerOptions.classList.toggle('show-options');
});

if (submitButton !== null) {

    submitButton.addEventListener('click', event => {
        event.preventDefault();
        let isValid = true;
    
        const inputs = form.querySelectorAll('.contact-form-input');
        inputs.forEach(input => {
            if (input.value === '') {
                input.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                isValid = false;
            } else {
                input.style.backgroundColor = '';
                console.log(input);
            }
        });
    
        const emailInput = form.querySelector('#femail');
        const emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            isValid = false;
        } else {
            emailInput.style.backgroundColor = '';
        }
    
        const selectInput = form.querySelector('#fchoice');
        if (selectInput.value === '0') {
            selectInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            isValid = false;
        } else {
            selectInput.style.backgroundColor = '';
        }
    
        const textareaInput = form.querySelector('#fmessage');
        if (textareaInput.value === '') {
            textareaInput.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
            isValid = false;
        } else {
            textareaInput.style.backgroundColor = '';
        }
    
        const checkbox = form.querySelector('.checkbox-box');
        if (!checkbox.checked) {
            alertText.style.color = 'red';
            isValid = false;
        } else {
            alertText.style.color = '';
        }
    
        if (!isValid) {
            alert.style.opacity = '1';
        } else {
            alert.style.opacity = '0';
            form.submit();
        }
    });
}

