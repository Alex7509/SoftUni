function palindromeIntegers(input) {

    for (let i = 0; i < input.length; i++) {

        let numToString = String(input[i]);
        let reversedNum = numToString.split('').reverse().join('');

        if (numToString === reversedNum) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
