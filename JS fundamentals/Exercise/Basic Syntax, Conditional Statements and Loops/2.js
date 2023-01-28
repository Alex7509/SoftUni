function solve(number, percision) {

    if (percision > 15) {
        percision = 15;
    }

    let output = number.toFixed(percision);
    console.log(parseFloat(output));

}
solve(10.5, 3);