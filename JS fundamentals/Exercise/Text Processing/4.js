function stringSubstring(word, text) {

    let splitedText = text.split(' ');

    for (const element of splitedText) {
        if (word.toLowerCase() === element.toLowerCase()) {
            return console.log(word);;
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javascript',
    'JavaScript is the best programming language')