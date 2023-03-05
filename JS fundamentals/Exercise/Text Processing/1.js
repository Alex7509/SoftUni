function revealWords(words, text) {

    let splitedWords = words.split(', ');
    let splitedText = text.split(' ');


    for (const el of splitedText) {

        if (el.includes('*')) {

            for (const word of splitedWords) {

                if (el.length === word.length) {
                    text = text.replace(el, word);
                }

            }
        }
    }
    console.log(text);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')