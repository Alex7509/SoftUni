function replaceRepeatingChars(char) {

    let result = '';

    for (let i = 0; i < char.length; i++) {
        if (char[i] !== char[i + 1]) {
            result += char[i];
        }
    }
    console.log(result);
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')