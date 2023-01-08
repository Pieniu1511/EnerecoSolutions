const burgerBtn = document.querySelector('.burger-icon');
const hiddenMenu = document.querySelector('.hidden-menu');
const closeBtn = document.querySelector('.close-menu');
const cards = document.querySelectorAll('.card');
const heroBottom = document.querySelector('.hero-bottom');
const heroText = heroBottom.querySelector('p');
const leftButton = document.querySelector('.hero-btn-left');
const rightButton = document.querySelector('.hero-btn-right');

cards.forEach(card => {
	const btn = card.querySelector('.plus-btn');
	const bottom = card.querySelector('.card-bottom');

	btn.addEventListener('click', () => {
		bottom.style.display = bottom.style.display === 'none' ? 'block' : 'none';
	});
});

let currentIndex = 0;

const classes = ['first-img', 'second-img', 'third-img', 'fourth-img'];

let texts = [
	'Ekologiczne rozwiązania dla przyszłych pokoleń',
	'Powiedz GOODBYE rachunkom za energię z naszymi panelami słonecznymi',
	'Oszczędzaj pieniądze i środowisko dzięki odnawialnej energii',
	'Tańsza energia dla Twojego domu i firmy',
];

const showMenu = () => {
	hiddenMenu.style.transform = 'translateX(0)';
};

const closeMenu = () => {
	hiddenMenu.style.transform = 'translateX(100%)';
};

function updateImage() {
	currentIndex = (currentIndex + 1) % classes.length;
	if (currentIndex === 0) {
		heroBottom.classList.replace(classes[classes.length - 1], classes[currentIndex]);
	} else {
		heroBottom.classList.replace(classes[currentIndex - 1], classes[currentIndex]);
	}
	heroText.textContent = texts[currentIndex];
}

setInterval(updateImage, 10000);

// function updateHero() {
// 	let bottomDiv = document.querySelector('.hero-bottom');
// 	bottomDiv.style.backgroundImage = `url(${images[currentImage]})`;

// 	let rightParagraph = bottomDiv.querySelector('p');
// 	rightParagraph.textContent = texts[currentText];
// }

// setInterval(function () {
// 	let bottomDiv = document.querySelector('.hero-bottom');
// 	bottomDiv.style.backgroundImage = `url(${images[currentImage]})`;
//     bottomDiv.classList.add

// 	let rightParagraph = bottomDiv.querySelector('p');
// 	rightParagraph.textContent = texts[currentText];

// 	currentImage = (currentImage + 1) % images.length;
// 	currentText = (currentText + 1) % texts.length;
// }, 10000);

burgerBtn.addEventListener('click', showMenu);
closeBtn.addEventListener('click', closeMenu);
leftButton.addEventListener('click', function () {
	currentIndex = (currentIndex - 1 + classes.length) % classes.length;
	heroBottom.classList.replace(classes[currentIndex + 1], classes[currentIndex]);
	heroText.textContent = texts[currentIndex];
});
rightButton.addEventListener('click', function () {
	currentIndex = (currentIndex + 1) % classes.length;
	if (currentIndex === 0) {
		heroBottom.classList.replace(classes[classes.length - 1], classes[currentIndex]);
	} else {
		heroBottom.classList.replace(classes[currentIndex - 1], classes[currentIndex]);
	}
	heroText.textContent = texts[currentIndex];
});
