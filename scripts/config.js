export const CONFIG = {
	prod: {
		postsLink:
			"https://raw.githubusercontent.com/Finchasaurus/nekoweb/refs/heads/master/data/posts/navigation.json",
		postLinkLookup: "https://raw.githubusercontent.com/Finchasaurus/nekoweb/refs/heads/master/data/posts/{id}.json",
	},
	dev: {
		postsLink: "/data/posts/navigation.json",
		postLinkLookup: "/data/posts/{id}.json",
	},
};

export const ENV = location.hostname === "localhost" || location.hostname === "127.0.0.1" ? "dev" : "prod";
