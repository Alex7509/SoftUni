function sum(numbersArr, startIndex, endIndex) {

    let sum = 0;

    if (!Array.isArray(numbersArr)) {
        return NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > numbersArr.length - 1) {
        endIndex = numbersArr.length - 1;
    }

    let slicedArr = numbersArr.slice(startIndex, endIndex + 1);

    for (let num of slicedArr) {
        sum += Number(num);
    }

    return sum;
}
