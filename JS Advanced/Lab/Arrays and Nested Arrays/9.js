function solve(input) {

    let newArr = [];

    for (const arr of input) {
        for (const num of arr) {
            newArr.push(num);
        }
    }

    newArr.sort((a, b) => a - b);
    let result = newArr.pop();

    return result;
}
solve([[20, 50, 10],
[8, 33, 145]]);