const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

fetch("/posts/navigation.json")
	.then((res) => res.json())
	.then((data) => {
		const post = data.posts.find((p) => p.id === postId);
		if (!post) {
			document.body.innerHTML = "<h1>Post not found</h1>";
			return;
		}

		document.title = post.title;
		document.getElementById("post-title").textContent = post.title;
		document.getElementById("post-description").textContent = post.description;
		document.getElementById("post-meta").textContent = `${post.date || "Unknown date"} | Tags: ${(
			post.tags || []
		).join(", ")}`;

		if (post.image) {
			const imgEl = document.getElementById("post-image");
			imgEl.src = post.image;
			imgEl.className = "accent filter-remove";
			imgEl.style.display = "block";
		}

		if (post.content) {
			document.getElementById("post-content").innerHTML = post.content;
		}
	})
	.catch(console.error);
