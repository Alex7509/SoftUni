function solve(a, b) {

    let result = 0;
    
    a = Number(a);
    b = Number(b);

    for (let i = a; i <= b; i++) {
        result += i;
    }
    console.log(result);
}
solve('1', '5');