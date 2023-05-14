function solve(arr, argument) {

    let resultArr = [];

    if (argument === 'asc') {
        resultArr = arr.sort((a, b) => a - b);
    } else if (argument === 'desc') {
        resultArr = arr.sort((a, b) => b - a);
    }
    return resultArr;
}
