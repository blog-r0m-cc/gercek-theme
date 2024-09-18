(function() {
	const spanArrow = document.createElement("span");
	spanArrow .setAttribute("id", "scroll-to-top-arrow");

	const span = document.createElement("span");
	span.setAttribute("id", "scroll-to-top");
	span.appendChild(spanArrow);
	span.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	window.addEventListener("scroll", (e) => {
		if (window.scrollY > 150) {
			span.style.display = "block";
			return;
		}

		span.style.display = "none";
	});

	document.body.prepend(span);
})();
