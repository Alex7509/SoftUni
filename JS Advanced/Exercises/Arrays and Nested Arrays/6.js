function solve(arr) {

    let sortedArr = arr.sort((a, b) => {
        return a.localeCompare(b);
    });
    let count = 0;

    for (let i = 0; i < sortedArr.length; i++) {
        count++;
        console.log(`${count}.${sortedArr[i]}`);
    }
}
solve(["John",
    "Bob",
    "Christina",
    "Ema"])