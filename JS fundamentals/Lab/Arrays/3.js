function solve(count, numbers) {
    
    let output = '';
    for (let i = count - 1; i >= 0; i--) {
        let result = numbers[i];
        output += `${result} `
    }
    console.log(output);

}
solve(3, [10, 20, 30, 40, 50]);