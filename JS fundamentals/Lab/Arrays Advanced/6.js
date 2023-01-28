function smallestTwoNumbers(input) {

    let sorted = input.sort((a, b) => a - b);
    let output = sorted.slice(0, 2);

    console.log(output.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5]);