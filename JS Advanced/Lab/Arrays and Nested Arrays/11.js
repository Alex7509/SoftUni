function solve(input) {

    let count = 0;

    for (let i = 0; i < input.length - 1; i++) {

        for (let j = 0; j < input[i].length; j++) {

            if (input[i][j] === input[i + 1][j]) {
                count++;
            }

            if (input[i][j] === input[i][j + 1]) {
                count++;
            }

            if (i == input.length - 2 && input[i + 1][j] === input[i + 1][j + 1]) {
                count++
            }
        }
    }

    return count;
}
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])