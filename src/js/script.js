const burgerBtn = document.querySelector('.burger-icon');
const hiddenMenu = document.querySelector('.hidden-menu');
const closeBtn = document.querySelector('.close-menu');
const cards = document.querySelectorAll('.card');
const dropdown = document.querySelector('.nav-item--dropdown');

const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');
dropdownMenu.innerHTML = '<a href="#">Instalacje fotowoltaiczne</a><a href="#">Pompy ciepła</a><a href="#">Tania energia</a><a href="#">Dotacje</a>'
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
};

const closeMenu = () => {
	hiddenMenu.style.transform = 'translateX(100%)';
};

burgerBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);
