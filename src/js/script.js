const burgerBtn = document.querySelector('.burger-icon');
const hiddenMenu = document.querySelector('.hidden-menu');
const closeBtn = document.querySelector('.close-menu');
const cards = document.querySelectorAll('.card');
let heroLeftButton = document.querySelector('.hero-btn-left');
let heroRightButton = document.querySelector('.hero-btn-right');

cards.forEach(card => {
	const btn = card.querySelector('.plus-btn');
	const bottom = card.querySelector('.card-bottom');

	btn.addEventListener('click', () => {
		bottom.style.display = bottom.style.display === 'none' ? 'block' : 'none';
	});
});

let images = ['../../dist/img/5.jpg', '../../dist/img/2.jpg', '../../dist/img/heat_pomp.jpeg', '../../dist/img/energy.jpg'];

let texts = [
	'Ekologiczne rozwiązania dla przyszłych pokoleń',
	'Powiedz goodbye rachunkom za energię z naszymi panelami słonecznymi',
	'Oszczędzaj pieniądze i środowisko dzięki odnawialnej energii',
	'Tańsza energia dla Twojego domu i firmy',
];

let currentImage = 0;
let currentText = 0;

const showMenu = () => {
	hiddenMenu.style.transform = 'translateX(0)';
};

const closeMenu = () => {
	hiddenMenu.style.transform = 'translateX(100%)';
};

function updateHero() {
	let bottomDiv = document.querySelector('.hero-bottom');
	bottomDiv.style.backgroundImage = `url('${images[currentImage]}')`;

	let rightParagraph = bottomDiv.querySelector('p');
	rightParagraph.textContent = texts[currentText];
}

setInterval(function () {
	let bottomDiv = document.querySelector('.hero-bottom');
	bottomDiv.style.backgroundImage = `url('${images[currentImage]}')`;

	let rightParagraph = bottomDiv.querySelector('p');
	rightParagraph.textContent = texts[currentText];

	currentImage = (currentImage + 1) % images.length;
	currentText = (currentText + 1) % texts.length;
}, 10000);

burgerBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);
heroLeftButton.addEventListener('click', function () {
	currentImage = (currentImage - 1 + images.length) % images.length;
	currentText = (currentText - 1 + texts.length) % texts.length;
	updateHero();
});

heroRightButton.addEventListener('click', function () {
	currentImage = (currentImage + 1) % images.length;
	currentText = (currentText + 1) % texts.length;
	updateHero();
});
