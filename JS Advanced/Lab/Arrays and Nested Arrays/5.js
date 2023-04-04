function solve(numbers) {

    numbers.sort((a, b) => a - b);
    let result = numbers.slice(0, 2);

    console.log(result);
}
solve([3, 0, 10, 4, 7, 3])