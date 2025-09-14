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
