function solve(input) {

    input = input.map(Number)
    let firstEl = input.shift();
    let lastEl = input.pop();

    console.log(firstEl + lastEl);
}
solve(['20', '30', '40'])