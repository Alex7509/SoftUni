function negativeOrPosituveNumbers(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let current = Number(arr[i]);

        if (current < 0) {
            newArr.unshift(current);
        } else {
            newArr.push(current);
        }
    }

    console.log(newArr.join('\n'));

}
negativeOrPosituveNumbers(['7', '-2', '8', '9']);