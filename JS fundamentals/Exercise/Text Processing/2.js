function modernTimesOfHashTag(text) {

    let splitedText = text.split(' ');

    for (const word of splitedText) {
        let isValid = word.startsWith('#') && word.length > 1;
        let isLetter = true;
        let result = '';
        if (isValid) {
            let slicedWord = word.slice(1);
            for (const letters of slicedWord) {
                if (!isNaN(letters)) {
                    isLetter = false;
                    break;
                } else {
                    result += letters;
                }
            }
            if (isLetter) {
                console.log(result);
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')