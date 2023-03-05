function censoredWords(sentence, censoredWord) {


    while (sentence.includes(censoredWord)) {
        sentence = sentence.replace(censoredWord, '*'.repeat(censoredWord.length));
    }

    console.log(sentence);
}
censoredWords('A small sentence with some words', 'small')