function solve(matrix) {

    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b);

        let sumCOne = 0;
        let sumCtwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCtwo += matrix[i + 1][j]
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCtwo) {
            return false;
        }
    }

    return true;
}
solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])