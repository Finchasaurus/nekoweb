export const CONFIG = {
	prod: {
		postsLink:
			"https://raw.githubusercontent.com/Finchasaurus/nekoweb/refs/heads/master/data/posts/navigation.json",
		postLinkLookup: "https://raw.githubusercontent.com/Finchasaurus/nekoweb/refs/heads/master/data/posts/{id}.json",
		myStatusLink: "https://raw.githubusercontent.com/Finchasaurus/nekoweb/refs/heads/master/data/status.txt",
	},
	dev: {
		postsLink: "/data/posts/navigation.json",
		postLinkLookup: "/data/posts/{id}.json",
		myStatusLink: "/data/status.txt",
	},
};

export const ENV = location.hostname === "localhost" || location.hostname === "127.0.0.1" ? "dev" : "prod";

export const LINKS = [
	{ href: "index.html", title: "Go to the homepage", text: "Home", id: 1 },
	{ href: "projects.html", title: "Check out my projects", text: "Projects", id: 2 },
	{ href: "skills.html", title: "See my skills and expertise", text: "Skills", id: 3 },
	{ href: "favorites.html", title: "See my favourite things", text: "Favorites", id: 4 },
	{ href: "cats.html", title: "Cats", text: "Cats", id: 5 },
	{ href: "resources.html", title: "Useful resources and links", text: "Resources", id: 6 },
	{ href: "contact.html", title: "Get in touch with me", text: "Contact", id: 7 },
];