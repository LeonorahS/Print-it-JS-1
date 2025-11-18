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


// 1 sélectionner les éléments du DOM nécessaires pour le slider
const bannerImage = document.querySelector('#banner-img'); // image principale
const bannerTagLine = document.querySelector('#banner-tagline'); // texte de la bannière
const leftArrow = document.querySelector('.arrow_left'); // flèche gauche
const rightArrow = document.querySelector('.arrow_right'); // flèche droite
const dotsContainer = document.querySelector('.dots'); // conteneur des points

// 2 initialiser le compteur représente l'index du slide actuellement affiché
let compteur = 0;

// 3 Creer la fonction qui met à jour l’image et le texte affiché dans la bannière, la function sliderPrint es la principale.
function sliderPrint() {
	bannerImage.src = `./assets/images/slideshow/${slides[compteur].image}`; // met à jour l'image o la recupere du tableau
	bannerTagLine.innerHTML = slides[compteur].tagLine; // met à jour le texte de chaque image inclus en la balise span de p.
	updateDots(); // met à jour les points actifs qui corresponds à la image quii s'affihe.
}

// 4 Creer la fonction pour les points pour créer dynamiquement les points (dots) pour chaque slide à fur et mesure que lee les slides qui se trouvent dans le tableau 
function createDots() {
	for (let i = 0; i < slides.length; i++) { // boucle for" pour chaque" slide dans le tableau slides, commence à 0 et s'arrête avant slides.length qui serait le nombre total de slides
		const dot = document.createElement('span'); // crée un <span> pour un point 
		dot.classList.add('dot'); // lui ajoute la classe .dot pour le style CSS

		// Si le point correspond à l’image actuellement affichée, on lui ajoute la classe .active

		if (i === compteur) {
			dot.classList.add('active'); // active le point correspondant à l’image affichée
		}

		// Lorsque l’utilisateur clique sur un point, on met à jour le compteur et on affiche le bon slide
		dot.addEventListener('click', () => {
			compteur = i;
			sliderPrint(); // on met à jour l’image, le texte et les points
		});

		dotsContainer.appendChild(dot); // ajoute le point au DOM dans le conteneur .dots
	}
}

// 5 Creer la  fonction  qui supprime la classe active de tous les points,
// puis l’ajoute uniquement sur celui qui correspond au slide affiché actuellement.
function updateDots() {
	const dots = document.querySelectorAll('.dot'); // sélectionne tous les points existants
	dots.forEach((dot) => {
		dot.classList.remove('active'); // on désactive tous les points
	});
	dots[compteur].classList.add('active'); // on active uniquement le point correspondant à l’image actuelle
}

// 6 Ajouter les evenementss sur les images des fleches , Flèche droite : aller au slide suivant (ou revenir au premier)
rightArrow.addEventListener('click', () => {
	compteur++;
	if (compteur >= slides.length) {
		compteur = 0;
	}
	sliderPrint();
});

// Flèche gauche : aller au slide précédent (ou revenir au dernier)
leftArrow.addEventListener('click', () => {
	compteur--;
	if (compteur < 0) {
		compteur = slides.length - 1;
	}
	sliderPrint();
});
// Initialisation du slider
createDots();
sliderPrint();

