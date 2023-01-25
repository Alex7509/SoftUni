function solve(input) {

    let newArr = [];
    let isBigger = true;

    for (let i = 0; i < input.length; i++) {

        let current = Number(input[i]);
        let isBigger = true;

        for (let j = i + 1; j < input.length; j++) {

            if (current <= input[j]) {
                isBigger = false;
            }
        }

        if (isBigger) {
            newArr.push(current);
        }
    }

    console.log(newArr.join(' '));

}
