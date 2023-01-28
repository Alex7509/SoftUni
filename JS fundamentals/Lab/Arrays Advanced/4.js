function lastKNumbersSequence(n, k) {

    let resultArr = [1];

    for (let i = 1; i < n; i++) {

        let lastNumber = resultArr.slice(-k);
        let sum = 0;

        for (const number of lastNumber) {
            sum += number;
        }

        resultArr.push(sum);
    }

    console.log(resultArr.join(' '))

}
lastKNumbersSequence(6, 3);