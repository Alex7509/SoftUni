function smallestTwoNumbers(input) {

    let sorted = input.sort((a, b) => a - b);
    let output = sorted.slice(0, 2);

    console.log(output.join(' '));

}
