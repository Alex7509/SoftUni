function solve(arr, num) {

    for (let i = 0; i < num; i++) {
        let rotated = arr.pop();
        arr.unshift(rotated);
    }
    console.log(arr.join(' '));
}
solve(['1',
    '2',
    '3',
    '4'],
    2)