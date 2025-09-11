const postsContainer = document.querySelector(".posts");
const postsLink = "https://raw.githubusercontent.com/Finchasaurus/nekoweb/refs/heads/master/posts/navigation.json";

fetch(postsLink)
	.then((res) => res.json())
	.then((data) => {
		if (!data.posts) return;
		data.posts.forEach((post) => {
			const postEl = document.createElement("div");
			postEl.className = "post";
			postEl.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <a href="/posts/${post.id}">Read more</a>
      `;
			postsContainer.appendChild(postEl);
		});
	})
	.catch(console.error);
