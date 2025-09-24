import { CONFIG, ENV, LINKS } from "./config.js";

const linkIndexMap = LINKS.reduce((map, link) => {
	const path = link.href.replace(/\.html$/, "").replace(/^\/|\/$/g, "");
	map[path] = link.id;
	return map;
}, { "": 1 });

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

async function fetchStatusCafeBanner() {
	try {
		const response = await fetch("https://status.cafe/users/meowbyte/status.json");
		const data = await response.json();

		if (!data.content || !data.content.length) {
			return "No status yet.";
		}

		return `${data.author} ${data.face} ${data.timeAgo}: ${data.content}`;
	} catch (e) {
		return "Meowbyte rocks!";
	}
}


async function getDefaultBannerReplacement(path) {
	switch (path) {
		case "":
		case "index": {
			return fetchStatusCafeBanner();
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
