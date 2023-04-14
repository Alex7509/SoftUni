function solve(arr) {

    let result = [];
    let biggest = arr[0];

    for (const el of arr) {
        if (el >= biggest) {
            biggest = el;
            result.push(biggest);
        }
    }
    return result;
}
solve([20, 3, 2, 15, 6, 1])