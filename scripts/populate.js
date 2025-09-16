document.querySelectorAll("header.populate").forEach((header) => {
	const brand = document.createElement("span");
	brand.innerHTML = `Meow<span title="Why did the byte break up with the bit? Because it needed some space!">byte</span>`;

	const iconLink = document.createElement("a");
	iconLink.href = "index.html";
	iconLink.title = "Meow";
	iconLink.className = "icon";

	const iconImg = document.createElement("img");
	iconImg.src = "assets/cat.svg";
	iconImg.className = "accent";
	iconLink.appendChild(iconImg);

	header.appendChild(brand);
	header.appendChild(iconLink);
});

document.querySelectorAll("footer.populate").forEach((footer) => {
	footer.innerHTML = `
		<p>© 2025 Meowbyte. All rights reserved.</p>
		<nav class="populate"></nav>
		<p>Meowbyte - Where code meets cats 🐱</p>
	`;
});

const links = [
	{ href: "index.html", title: "Go the the homepage", text: "Home" },
	{ href: "about.html", title: "Learn more about me", text: "About" },
	{ href: "favorites.html", title: "All about my favorite things", text: "Favorites" },
	{ href: "blog.html", title: "Read my blog posts", text: "Blog" },
	{ href: "politics.html", title: "My political views and opinions", text: "Politics" },
	{ href: "test.html", title: "Testing things out", text: "Test" },
	{ href: "contact.html", title: "Get in touch with me", text: "Contact" },
];

document.querySelectorAll("nav.populate").forEach((nav) => {
	links.forEach((link) => {
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
<span class="tech-icon"><img src="assets/luau.png" alt="Luau Logo" class="accent"/></span>
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
