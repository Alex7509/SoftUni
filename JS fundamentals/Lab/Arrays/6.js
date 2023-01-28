function solve(input) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < input.length; i++) {
        let numbers = Number(input[i]);
        if (numbers % 2 == 0) {
            sumEven += numbers;
        } else {
            sumOdd += numbers
        }
    }
    console.log(sumEven - sumOdd);
}
solve([1, 2, 3, 4, 5, 6])