function solve(numbers) {

    let sum = numbers.reduce((a, b) => a + b);
    console.log(sum);

    let sumInverse = numbers.reduce((a, b) => a + (1 / b), 0);
    console.log(sumInverse);

    let concat = numbers.reduce((a, b) => a + b.toString());
    console.log(concat);
}
solve([1, 2, 3]);