function solve(intiger) {

    intiger = intiger.toString();
    let firstDigit = intiger[0];
    let isTheSame = true;
    let sum = 0;

    for (let i = 1; i < intiger.length; i++) {

        let currentDigit = intiger[i];

        if (firstDigit !== currentDigit) {
            isTheSame = false;
            break;
        }
    }

    console.log(isTheSame);

    for (const digit of intiger) {
        sum += Number(digit);
    }

    console.log(sum);
}
solve(1234);