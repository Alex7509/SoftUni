function solve(a, b) {

    let result;

    while (b !== 0) {
        result = b;
        b = a % b;
        a = result;
    }

    console.log(result);
}
solve(15, 5)