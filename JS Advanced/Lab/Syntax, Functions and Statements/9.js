function solve(count) {

    if (!count) {
        count = 5;
    }

    for (let i = 0; i < count; i++) {
        console.log('* '.repeat(count));
    }
}
solve(7);