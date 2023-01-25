function houseParty(input) {

    let arr = [];

    for (const el of input) {
        let current = el.split(' ');

        let name = current[0];
        let command = current.slice(1);

        if (command.length === 2) {
            if (arr.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                arr.push(name)
            }
        } else {
            if (arr.includes(name)) {
                let index = arr.indexOf(name);
                arr.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(arr.join('\n'));

}
