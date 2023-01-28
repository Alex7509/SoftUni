function solve(arr) {

    let arrLength = arr.length;
    let longestSequence = [];

    for (let i = 0; i < arrLength; i++) {

        let currentNumber = Number(arr[i]);
        let currentArray = [currentNumber];

        for (let j = i + 1; j < arrLength; j++) {

            let nextNumber = Number(arr[j]);

            if (nextNumber === currentNumber) {

                currentArray.push(nextNumber);

            } else {
                break;
            }
        }

        if (currentArray.length > longestSequence.length) {

            longestSequence = [];

            for (let y = 0; y < currentArray.length; y++) {

                longestSequence.push(currentArray[y]);

            }
        }
    }

    console.log(longestSequence.join(' '));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])