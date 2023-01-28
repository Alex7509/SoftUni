function solve(input) {

    let newArr = [];
    let inputSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < input.length; i++) {

        let current = Number(input[i]);

        if (current % 2 === 0) {
            newArr.push(current + i);
        } else {
            newArr.push(current - i);
        }

        inputSum += current
        newArrSum += Number(newArr[i]);

    }

    console.log(newArr);
    console.log(inputSum);
    console.log(newArrSum);

}
solve([5, 15, 23, 56, 35])