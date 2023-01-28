function factorial(num1, num2) {

    let factorialNum1 = 1;
    let factorialNum2 = 1;
    let result = 0;

    for (let i = 1; i <= num1; i++) {

        factorialNum1 *= i;

    }

    for (let j = 1; j <= num2; j++) {

        factorialNum2 *= j;

    }

    result = (factorialNum1 / factorialNum2).toFixed(2);

    console.log(result);

}
factorial(5, 2);