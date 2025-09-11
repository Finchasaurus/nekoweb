const navLinks = document.querySelectorAll('nav a');

const linkIndexMap = {
	"": 0,
	"about": 1,
	"favorites": 2,
	"blog": 3,
	"politics": 4,
	"contact": 5,
}

const colors = ['#FF5584', '#FFA361', '#FDDD70', '#A4D25E', '#2CA6D6', '#7F76C7'];
const colorFilters = [
	'brightness(0) saturate(100%) invert(49%) sepia(76%) saturate(2533%) hue-rotate(313deg) brightness(102%) contrast(104%)',
	'brightness(0) saturate(100%) invert(79%) sepia(14%) saturate(2325%) hue-rotate(321deg) brightness(100%) contrast(101%)',
	'brightness(0) saturate(100%) invert(95%) sepia(80%) saturate(847%) hue-rotate(321deg) brightness(102%) contrast(98%)',
	'brightness(0) saturate(100%) invert(83%) sepia(35%) saturate(614%) hue-rotate(32deg) brightness(90%) contrast(92%)',
	'brightness(0) saturate(100%) invert(83%) sepia(36%) saturate(6678%) hue-rotate(164deg) brightness(87%) contrast(93%)',
	'brightness(0) saturate(100%) invert(62%) sepia(6%) saturate(3878%) hue-rotate(206deg) brightness(79%) contrast(97%)',
];
const defaultColor = 'black'
const defaultColorFilter = 'brightness(0) saturate(100%)';

const banners = ['Meowbox rocks!', 'Meowbit rocks!', 'Meowtwo rocks!', 'Meowcat rocks!', 'Meowey rocks!', 'Meowsexual rocks!'];
const defaultBanner = 'Meowbyte rocks!';

const bannerText = document.querySelector('.banner .scrolling-text');
const accentImages = document.querySelectorAll('img.accent');

function apply(index) {
	const color = index !== undefined ? colors[index] : defaultColor;
	const banner = index !== undefined ? banners[index] : defaultBanner;
	const filter = index !== undefined ? colorFilters[index] : defaultColorFilter;
	
	document.documentElement.style.setProperty('--accent-color', color);
	
	if (bannerText) bannerText.textContent = banner;
	
	accentImages.forEach((img) => img.style.filter = filter);
}

apply();
navLinks.forEach((link) => {
	let href = link.getAttribute('href').trim();
	if (href.endsWith("/")) href = href.slice(0, -1);
	const index = linkIndexMap[href] ?? -1;

	if (index === -1) return;

  link.addEventListener('mouseenter', () => {
		apply(index);
	});

  link.addEventListener('mouseleave', () => {
    apply();
	});
});

