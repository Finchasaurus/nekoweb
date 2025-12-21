import { LINKS } from "./config.js";

document.querySelectorAll(".populate.header").forEach((header) => {
	const brand = document.createElement("span");
	brand.innerHTML = `Meow<span title="Why did the byte break up with the bit? Because it needed some space!">byte</span>`;

	const checkboxId = "cat-toggle";
	const iconWrapper = document.createElement("label");
	iconWrapper.htmlFor = checkboxId;
	iconWrapper.className = "icon";
	iconWrapper.title = "Meow";

	const iconCheckbox = document.createElement("input");
	iconCheckbox.type = "checkbox";
	iconCheckbox.id = checkboxId;
	iconCheckbox.style.display = "none";

	const iconImg = document.createElement("img");
	iconImg.setAttribute("accent", "filter");
	iconImg.src = "assets/cat.svg";
	iconImg.className = "accent";
	iconImg.style.cursor = "pointer";

	iconWrapper.appendChild(iconImg);

	header.appendChild(brand);
	header.appendChild(iconCheckbox);
	header.appendChild(iconWrapper);
});

document.querySelectorAll(".populate.footer").forEach((footer) => {
	footer.innerHTML = `
		<p>© 2025 Meowbyte. All rights reserved.</p>
		<nav class="populate navigation"></nav>
		<p>Meowbyte - Where code meets cats 🐱</p>
		`;
});

document.querySelectorAll(".populate.navigation").forEach((nav) => {
	LINKS.forEach((link) => {
		const a = document.createElement("a");
		a.href = link.href;
		a.title = link.title;
		a.textContent = link.text;
		nav.appendChild(a);
	});
});

const scrollingContentStr = `
<span class="tech-icon"><i class="devicon-typescript-plain"></i></span>
<span class="tech-icon"><i class="devicon-javascript-plain"></i></span>
<span class="tech-icon"><i class="devicon-java-plain"></i></span>
<span class="tech-icon"><i class="devicon-json-plain"></i></span>
<span class="tech-icon"><i class="devicon-lua-plain"></i></span>
<span class="tech-icon"><img src="assets/luau.png" alt="Luau Logo"/></span>
<span class="tech-icon"><i class="devicon-blender-original"></i></span>
<span class="tech-icon"><i class="devicon-c-original"></i></span>
<span class="tech-icon"><i class="devicon-cplusplus-plain"></i></span>
<span class="tech-icon"><i class="devicon-csharp-plain"></i></span>
<span class="tech-icon"><i class="devicon-clion-plain"></i></span>
<span class="tech-icon"><i class="devicon-cmake-plain"></i></span>
<span class="tech-icon"><i class="devicon-firefox-plain"></i></span>
<span class="tech-icon"><i class="devicon-git-plain"></i></span>
<span class="tech-icon"><i class="devicon-github-original"></i></span>
<span class="tech-icon"><i class="devicon-linux-plain"></i></span>
<span class="tech-icon"><i class="devicon-markdown-original"></i></span>
<span class="tech-icon"><i class="devicon-npm-original-wordmark"></i></span>
<span class="tech-icon"><i class="devicon-opengl-plain"></i></span>
<span class="tech-icon"><i class="devicon-vulkan-original"></i></span>
<span class="tech-icon"><i class="devicon-react-original"></i></span>
<span class="tech-icon"><i class="devicon-unity-plain"></i></span>
<span class="tech-icon"><i class="devicon-unrealengine-original"></i></span>
<span class="tech-icon"><i class="devicon-vscode-plain"></i></span>
`;

document.querySelectorAll(".populate.scrolling-content").forEach((container) => {
	container.innerHTML = scrollingContentStr;
});
