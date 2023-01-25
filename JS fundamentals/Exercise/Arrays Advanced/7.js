function searchForANumber(numbers, commands) {

    let take = commands.shift();
    let deleted = commands.shift();
    let search = commands.shift();

    let count = 0;

    let newArr = numbers.slice(0, take);

    for (let i = 0; i < deleted; i++) {
        newArr.shift();
    }

    for (const current of newArr) {

        if (current === search) {
            count++;
        }
    }

    console.log(`Number ${search} occurs ${count} times.`);

}
