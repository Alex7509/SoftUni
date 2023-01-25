function addAndSubtract(first, second, third) {

    function add(first, second) {

        let sum = first + second;
        return sum;
    }

    let sumOfTwoNumbers = add(first, second);

    function subtract(sum, third) {

        return sum - third;
    }

    let result = subtract(sumOfTwoNumbers, third);

    console.log(result);
}
