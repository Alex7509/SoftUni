function solve(numbers) {

    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        let isNegative = numbers[i] < 0;

        if (isNegative) {
            result.unshift(numbers[i]);
        } else {
            result.push(numbers[i])
        }
    }

    console.log(result.join('\n'));
}
solve([7, -2, 8, 9]);