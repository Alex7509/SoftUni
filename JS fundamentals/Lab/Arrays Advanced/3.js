function firstAndLastKNumbers(arr) {

    let k = arr[0];
    let newArr = arr.slice(1, arr.length)

    let firstKElement = newArr.slice(0, k);
    let secondKElement = newArr.slice(newArr.length - k, newArr.length);

    console.log(firstKElement.join(' '));
    console.log(secondKElement.join(' '));
}
