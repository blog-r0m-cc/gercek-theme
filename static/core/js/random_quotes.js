(function() {
	if (typeof RANDOM_QUOTES === "undefined") {
		console.error("Couldn't find defined random quotes!");
		return;
	}

	if (RANDOM_QUOTES.length < 1) {
		console.error("Couldn't find any quotes in the random quotes list!");
		return;
	}

	function rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const randIndex = rand(1, RANDOM_QUOTES.length) - 1;
	const randQuote = RANDOM_QUOTES[randIndex];

	if (!randQuote.text) {
		console.error(`Quote ${randIndex + 1} in random quote list has empty text!`);
		return;
	}

	document.querySelector("#random-quote > #quote-text").innerText = randQuote.text;

	if (randQuote.author) {
		document.querySelector("#random-quote > #quote-author").innerText = randQuote.author;
		document.querySelector("#random-quote > #quote-author").style.display = "inline-block";
	}

	document.querySelector("#random-quote").style.display = "block";
})();
