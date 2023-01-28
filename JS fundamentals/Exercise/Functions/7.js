function NxNMatrix(number) {

    let resultArr = [];

    for (let i = 0; i < number; i++) {

        let result = '';

        for (let j = 0; j < number; j++) {

            result += `${number} `
        }
        
        resultArr.push(result)
    }

    console.log(resultArr.join('\n'));

}
NxNMatrix(7);