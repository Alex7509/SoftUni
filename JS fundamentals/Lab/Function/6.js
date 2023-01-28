function signChek(numOne, numTwo, numThree) {

    let result = numOne * numTwo * numThree;

    if (result < 0) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }

}
signChek(5, 12, -15)