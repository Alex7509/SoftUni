function train(input) {

    let passangers = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {

        let currentCommand = input[i].split(' ');

        if (currentCommand[0] === 'Add') {
            passangers.push(currentCommand[1]);
        } else {
            for (let j = 0; j < passangers.length; j++) {

                let current = Number(currentCommand);

                if (current + Number(passangers[j]) <= maxCapacity) {
                    passangers[j] += current;
                    break;
                }
            }
        }
    }

    console.log(passangers.join(' '));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])