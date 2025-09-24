import { CONFIG, ENV } from "./config.js";

const linkIndexMap = {
	"": 1,
	index: 1,
	about: 2,
	favorites: 3,
	blog: 4,
	politics: 5,
	test: 6,
	contact: 7,
};

function getCssColor(index) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--accent-color-${index}`).trim();
}
function getCssFilter(index) {
  return getComputedStyle(document.documentElement).getPropertyValue(`--accent-filter-${index}`).trim();
}

const banners = [
	"Meowbyte rocks!",
	"Meowbyte rocks!",
	"Meowbox rocks!",
	"Meowbit rocks!",
	"Meowtwo rocks!",
	"Meowcat rocks!",
	"Meowey rocks!",
	"Meowsexual rocks!",
];

function apply(index = 0) {
	const color = getCssColor(index);
	const banner = banners[index];
	const filter = getCssFilter(index);

	document.documentElement.style.setProperty("--accent-color-main", color);

	const bannerText = document.querySelector("banner scrolling-text");
	if (bannerText) {
		bannerText.textContent = banner;
	}

	document.querySelectorAll("img.accent").forEach((img) => (img.style.filter = filter));
	if (index === 0) {
		document.querySelectorAll(".filter-remove").forEach((img) => (img.style.filter = ""));
	}
}

function stripPath(path) {
	return path.replace(/^\/|\/$|\.html$/g, "");
}

async function getDefaultBannerReplacement(path) {
	switch (path) {
		case "":
		case "index": {
			return fetch(CONFIG[ENV].myStatusLink).then((response) => response.text());
		}
		default:
			return banners[linkIndexMap[path]];
	}
}

function populateDefaults() {
	let path = window.location.pathname;
	path = stripPath(path);
	let pathIndex = linkIndexMap[path];
	if (pathIndex !== undefined) {
		document.documentElement.style.setProperty("--accent-color-0", getCssColor(pathIndex));
    	document.documentElement.style.setProperty("--accent-filter-0", getCssFilter(pathIndex));

		getDefaultBannerReplacement(path).then((banner) => {
			banners[0] = banner;
			apply();
		});
	}
}

function manageHover(link) {
	let href = link.getAttribute("href");
	href = stripPath(href);
	const index = linkIndexMap[href];

	link.addEventListener("mouseenter", () => {
		apply(index);
		link.style.backgroundColor = getCssColor(index);
	});

	link.addEventListener("mouseleave", () => {
		apply();
		link.style.backgroundColor = "";
	});
}

function applyHoveredIfAny() {
	const hoveredLink = Array.from(document.querySelectorAll("nav a")).find((link) => link.matches(":hover"));
	if (!hoveredLink) {
		return;
	}

	let href = hoveredLink.getAttribute("href");
	href = stripPath(href);
	const index = linkIndexMap[href];
	if (index !== undefined) {
		apply(index);
		hoveredLink.style.backgroundColor = getCssColor(index);
	}
}

populateDefaults();
apply();
applyHoveredIfAny();

document.querySelectorAll("nav a").forEach(manageHover);
