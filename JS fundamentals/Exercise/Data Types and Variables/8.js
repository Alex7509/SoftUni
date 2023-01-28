function solve(number, operator, anotherNumber) {

    let result = 0;
    if (operator === '+') {
        result = number + anotherNumber;
    } else if (operator === '-') {
        result = number - anotherNumber
    } else if (operator === '*') {
        result = number * anotherNumber
    } else if (operator === '/') {
        result = number / anotherNumber
    }
    console.log(result.toFixed(2));

}
solve(5, '+', 10)