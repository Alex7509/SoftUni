function oddAndEvenSum(number) {

    let oddSum = 0;
    let evenSum = 0;

    let numberToString = number.toString();

    for (let i = 0; i < numberToString.length; i++) {

        let current = Number(numberToString[i]);

        if (current % 2 !== 0) {
            oddSum += current
        } else {
            evenSum += current;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
