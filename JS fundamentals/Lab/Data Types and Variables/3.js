function solve(string, char, word) {
    let result = string.replace('_', char);
    let output = word === result ? 'Matched' : 'Not Matched';
    console.log(output);
}
solve('Str_ng', 'I', 'Strong')