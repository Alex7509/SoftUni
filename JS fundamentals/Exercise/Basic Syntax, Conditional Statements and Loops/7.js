function solve(n) {

    for (let i = 1; i <= n; i++) {
        let output = '';
        for (let k = 1; k <= i; k++) {
            output += `${i} `;
        }
        console.log(output);
    }

}
solve(25);