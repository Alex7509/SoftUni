function countStringOccurrences(sentence, wordToCount) {

    let result = sentence.split(' ').filter(w => w === wordToCount);

    console.log(result.length);
}
countStringOccurrences('This is a word and it also is a sentence',
    'is')