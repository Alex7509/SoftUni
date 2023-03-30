function solve(arg1, arg2, arg3) {

    let arr = [];
    arr.push(arg1, arg2, arg3);
    
    let sum = 0;
    let avg = 0;

    for (const el of arr) {
        sum += el.length
    }

    avg = Math.floor(sum / arr.length);

    console.log(sum);
    console.log(avg);

}
solve('chocolate', 'ice cream', 'cake')