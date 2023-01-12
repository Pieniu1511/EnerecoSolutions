const burgerBtn = document.querySelector('.burger-icon');
const hiddenMenu = document.querySelector('.hidden-menu');
const closeBtn = document.querySelector('.close-menu');
const cards = document.querySelectorAll('.card');
const dropdown = document.querySelector('.nav-item--dropdown');
const offerBtn = document.querySelector('.offer');
const offerOptions = document.querySelector('.offer-options');
const body = document.querySelector('body');
const images = document.querySelectorAll('.partners-logo');
let i = 0;

function checkWidth() {
	if (window.innerWidth < 768) {
		setInterval(function () {
			images.forEach(img => (img.style.display = 'none'));
			images[i].style.display = 'block';
			i++;
			if (i === images.length) {
				i = 0;
			}
		}, 3000);
	}
}

checkWidth();
window.onresize = checkWidth;

const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');
dropdownMenu.innerHTML =
	'<a href="installations.html">Instalacje fotowoltaiczne</a><a href="heatpumps.html">Pompy ciepła</a><a href="cheapenergy.html">Tania energia</a><a href="grants.html">Dotacje</a>';
dropdown.appendChild(dropdownMenu);

cards.forEach(card => {
	const btn = card.querySelector('.plus-btn');
	const bottom = card.querySelector('.card-bottom');

	btn.addEventListener('click', () => {
		bottom.style.display = bottom.style.display === 'none' ? 'block' : 'none';
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
};

burgerBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);
offerBtn.addEventListener('click', function (e) {
	e.preventDefault();
	offerOptions.classList.toggle('show-options');
});
