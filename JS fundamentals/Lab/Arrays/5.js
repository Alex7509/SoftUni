function solve(input) {
    let numbers = 0;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        numbers = Number(input[i]);
        if (numbers % 2 == 0) {
            sum += numbers;
        }
    }
    console.log(sum);

}
solve(['1', '2', '3', '4', '5', '6'])