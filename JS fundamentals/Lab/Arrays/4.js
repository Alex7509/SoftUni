function solve(input) {
    let result = '';
    for (let i = input.length - 1; i >= 0; i--) {
        let current = input[i];
        result += `${current} `
    }
    console.log(result);

}
solve(['a', 'b', 'c', 'd', 'e'])