function solve(array) {
    while (array.length > 1) {
        let condensed = [];
        for (let i = 0; i < array.length - 1; i++) {
            condensed[i] = array[i] + array[i + 1];
        }
        array = condensed;
    }
    console.log(array[0]);

}
solve([2, 10, 3]);