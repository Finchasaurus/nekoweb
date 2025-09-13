const navLinks = document.querySelectorAll("nav a");

const linkIndexMap = {
	"": 0,
	index: 0,
	about: 1,
	favorites: 2,
	blog: 3,
	politics: 4,
	test: 5,
	contact: 6,
};

const colors = ["black", "#FF5584", "#FFA361", "#FDDD70", "#A4D25E", "#2CA6D6", "#7F76C7"];
const colorFilters = [
	"brightness(0) saturate(100%)",
	"brightness(0) saturate(100%) invert(49%) sepia(76%) saturate(2533%) hue-rotate(313deg) brightness(102%) contrast(104%)",
	"brightness(0) saturate(100%) invert(79%) sepia(14%) saturate(2325%) hue-rotate(321deg) brightness(100%) contrast(101%)",
	"brightness(0) saturate(100%) invert(95%) sepia(80%) saturate(847%) hue-rotate(321deg) brightness(102%) contrast(98%)",
	"brightness(0) saturate(100%) invert(83%) sepia(35%) saturate(614%) hue-rotate(32deg) brightness(90%) contrast(92%)",
	"brightness(0) saturate(100%) invert(83%) sepia(36%) saturate(6678%) hue-rotate(164deg) brightness(87%) contrast(93%)",
	"brightness(0) saturate(100%) invert(62%) sepia(6%) saturate(3878%) hue-rotate(206deg) brightness(79%) contrast(97%)",
];

const banners = [
	"Meowbyte rocks!",
	"Meowbox rocks!",
	"Meowbit rocks!",
	"Meowtwo rocks!",
	"Meowcat rocks!",
	"Meowey rocks!",
	"Meowsexual rocks!",
];

function apply(index = 0) {
	const color = colors[index];
	const banner = banners[index];
	const filter = colorFilters[index];

	document.documentElement.style.setProperty("--accent-color", color);

	if (document.querySelector(".banner .scrolling-text")) {
		bannerText.textContent = banner;
	}

	document.querySelectorAll("img.accent").forEach((img) => (img.style.filter = filter));
}

function stripPath(path) {
	return path.replace(/^\/|\/$|\.html$/g, "");
}

let path = window.location.pathname;
path = stripPath(path);
let pathIndex = linkIndexMap[path];
if (pathIndex !== undefined) {
	colors[0] = colors[pathIndex];
	colorFilters[0] = colorFilters[pathIndex];
	banners[0] = banners[pathIndex];
}

apply();
navLinks.forEach((link) => {
	let href = link.getAttribute("href");
	href = stripPath(href);
	const index = linkIndexMap[href];

	link.addEventListener("mouseenter", () => {
		apply(index);
		link.style.backgroundColor = colors[index];
	});

	link.addEventListener("mouseleave", () => {
		apply();
		link.style.backgroundColor = "";
	});
});
