function sumFirstAndLast(arr) {

    let newArr = [];
    newArr.push(arr.shift(), arr.pop());

    let sum = 0;

    for (let i = 0; i < newArr.length; i++) {

        let current = Number(newArr[i]);

        sum += current;

    }

    console.log(sum);

}
