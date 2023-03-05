function pascalCaseSplitter(text) {

    let result = text[0];
    let lowerCase = text.toLowerCase()

    for (let i = 1; i < text.length; i++) {
        if (text[i] !== lowerCase[i]) {
            result += ', ';
        }
        result += text[i];
    }
    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')