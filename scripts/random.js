const parents = document.querySelectorAll(".random-select");
parents.forEach((parent) => {
	const children = parent.querySelectorAll(".random-child");

	function getAndSet() {
		const randomIndex = Math.floor(Math.random() * children.length);
		const selectedChild = children[randomIndex];
		parent.textContent = selectedChild.textContent;
		parent.title = selectedChild.textContent;
	}

	getAndSet();

	parent.addEventListener("mouseenter", () => {
		getAndSet();
	});

	setInterval(getAndSet, 500);
});
