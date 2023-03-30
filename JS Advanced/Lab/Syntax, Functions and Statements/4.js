function solve(input) {

    let typeOfInput = typeof (input);

    if (typeOfInput !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    } else {
        let radius = input;
        let result = Math.PI * radius * radius;
        console.log(result.toFixed(2));
    }
}
solve(5);