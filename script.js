let words = prompt("write some words", "");

const text_length = words.length;

function countWords(str) {
    let word_count = 0;   // This will store our word count
    let wordStarted = false;  // This will help us know if we're in the middle of a word

    for (let i = 0; i < str.length; i++) {
        // If the character is not a space, we're inside a word
        if (str[i] !== ' ') {
            if (!wordStarted) { // If this is the start of a word, the '!' flips the 'wordStarted' variable and checks it as 'true' if its false
                word_count++;         // Increments the word_count for a new word
                wordStarted = true;  // Mark that we're in a word by 
            }
        } else {
            // If we hit a space, end the current word
            wordStarted = false;
        }
    }
    return word_count;
}

alert(`The text you entered has a length of ${text_length},and the number of words in your line are ${countWords(words)}`);



