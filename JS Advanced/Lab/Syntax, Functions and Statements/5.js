function solve(a, b, operation) {

    let result = 0;

    switch (operation) {
        case '+':
            result = a + b;
            break;

        case '-':
            result = a - b;
            break;

        case '*':
            result = a * b;
            break;

        case '/':
            result = a / b;
            break;

        case '%':
            result = a % b;
            break;

        case '**':
            result = a ** b;
            break;
    }
    console.log(result);
}
solve(5, 6, '+');