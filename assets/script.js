const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImage = document.querySelector('#banner-img');
const bannerTagLine = document.querySelector('#banner-tagline');
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

let counter= 0;

function sliderPrint() {
	bannerImage.src = `./assets/images/slideshow/${slides[counter].image}`;	
	bannerTagLine.innerHTML = slides[counter].tagLine;
	updatedots();
}

function createDots() {	
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		if (i === counter) {
			dot.classList.add('active');
		}

		dot.addEventListener('click', () => {
			counter = i;
			sliderPrint();
		});

		dotsContainer.appendChild(dot);
	}
}



function updatedots() {
	const dots = document.querySelectorAll('.dot');			
	dots.forEach((dot) => {
		dot.classList.remove('active');
	});
	dots[counter].classList.add('active');
}

leftArrow.addEventListener('click', () => {
	counter--;		
	if (counter < 0) {
		counter = slides.length - 1;
	}
	sliderPrint();
});

	rightArrow.addEventListener('click', () => {
		counter++;
		if (counter >= slides.length) {
			counter = 0;
		}
		sliderPrint();
	});

sliderPrint();
createDots();
 updatedots();