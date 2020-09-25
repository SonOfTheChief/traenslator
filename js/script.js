document.getElementById("translate").onclick = function() {translator()};

function translator(){
	var original_text = document.getElementById("originalText").value;
	var split_text = original_text.split(" ");

	for (const word in split_text) {
		// remove periods and commas from the current word
		var sanitized_word = split_text[word].replace(/[.,":;']/g, '');
		
		// try to match the current word to a word in our wordlist
		var translated_word = words[Object.keys(words).find(key => key.toLowerCase() === sanitized_word.toLowerCase())];
		
		// if a word in our wordlist matched, take the translated word as the new value
		if (translated_word != undefined) {
			split_text[word] = split_text[word].replace(sanitized_word, translated_word);
			// if the last char of the previous word is a period, capitalize the current words first char. lazy try/catch.
			try {
				if (split_text[word - 1].slice(-1) == ".") {
					split_text[word] = split_text[word].charAt(0).toUpperCase() + split_text[word].slice(1);
				}
			} catch {continue;}
		}
	}
	// capitalize the first char of the text
	var translated_text = split_text.join(" ").charAt(0).toUpperCase() + split_text.join(" ").slice(1)
	document.getElementById("translatedText").value = translated_text;
}
