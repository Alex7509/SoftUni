function solve(arr, result) {

    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        let sum = 0;

        for (let j = i + 1; j < arrLength; j++) {
            sum = arr[i] + arr[j];

            if (sum === result) {
                console.log(`${arr[i]} ${arr[j]}`);
            }

        }
    }
}
solve([14, 20, 60, 13, 7, 19, 8], 27);