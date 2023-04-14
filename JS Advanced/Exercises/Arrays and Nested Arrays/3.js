function solve(arrOfCommands) {

    let result = [];
    let num = 1;

    for (const command of arrOfCommands) {
        command === 'add' ? result.push(num) : result.pop();
        num++;
    }

    result.length === 0 ? console.log('Empty') : console.log(result.join('\n'));
}
solve(['add', 'add', 'remove', 'add', 'add']);