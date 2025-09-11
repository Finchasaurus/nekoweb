const postsContainer = document.querySelector(".posts");
const postsLink = "https://raw.githubusercontent.com/Finchasaurus/nekoweb/refs/heads/master/posts/navigation.json";

fetch(postsLink)
	.then((res) => res.json())
	.then((data) => {
		if (!data.posts) return;
		data.posts.forEach((post) => {
			const id = post.id;
			const title = post.title;
			const description = post.description;
			const date = post.date || "Unknown date";
			const tags = post.tags || [];
			const image = post.image;

			const postEl = document.createElement("a");
			postEl.className = "post";
			postEl.href = `/posts/${post.id}`;
			postEl.title = `${post.title} - ${post.description}`;
			postEl.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <p><small>${post.date} | Tags: ${post.tags.join(", ")}</small></p>
            `;
			if (image) {
				const imgEl = document.createElement("img");
				imgEl.src = image;
				imgEl.alt = title;
				imgEl.style.maxWidth = "100%";
				postEl.prepend(imgEl);
			}
			postsContainer.appendChild(postEl);
		});
	})
	.catch(console.error);
