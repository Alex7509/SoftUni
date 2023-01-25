function distinctArray(input) {

    let resultArr = [];

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (resultArr.includes(current)) {
            continue;
        } else {
            resultArr.push(current);
        }

    }

    console.log(resultArr.join(' '));

}
