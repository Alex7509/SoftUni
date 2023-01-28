function solve(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let type = '';
    if (Number.isInteger(sum)) {
        type = 'Integer';
    } else {
        type = 'Float';
    }
    console.log(`${sum} - ${type}`);

}
solve(9, 100, 1.1);