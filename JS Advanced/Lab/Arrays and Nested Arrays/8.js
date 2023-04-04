function solve(numbers) {

    let oddIndexNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) {
            oddIndexNumbers.push(numbers[i]);
        }
    }

    let result = oddIndexNumbers
        .map(a => a * 2)
        .reverse()
        .join(' ');

    return result;
}
solve([10, 15, 20, 25])