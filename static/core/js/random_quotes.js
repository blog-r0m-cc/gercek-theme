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

	// Credits: https://stackoverflow.com/a/18652401/8277139.
	// @expiry is in minutes
	function setCookie(key, value, expiry) {
		const expires = new Date();
		expires.setTime(expires.getTime() + (expiry * 60 * 1000));

		document.cookie = key + "=" + value + ";expires=" + expires.toUTCString();
	}

	function getCookie(key) {
		const keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
		return keyValue ? keyValue[2] : null;
	}

	function eraseCookie(key) {
		const keyValue = getCookie(key);
		setCookie(key, keyValue, "-1");
	}

	const lastIndexCookie = "random_quotes_last_index";
	let randIndex = -1;

	while (true) {
		const i = rand(1, RANDOM_QUOTES.length) - 1;

		if (RANDOM_QUOTES.length > 1 && getCookie(lastIndexCookie) == i)
			continue;

		randIndex = i;
		break;
	}

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

	setCookie(lastIndexCookie, randIndex, 60);
})();
