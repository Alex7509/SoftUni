function arrayManipulations(input) {

    let arr = input
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {

        let current = input[i].split(' ');
        let command = current[0];
        let number = Number(current[1]);

        if (command === 'Add') {

            arr.push(number);

        } else if (command === 'Remove') {

            arr = arr.filter(x => x !== number);

        } else if (command === 'RemoveAt') {

            arr.splice(number, 1);

        } else if (command === 'Insert') {

            let index = Number(current[2]);

            arr.splice(index, 0, number);

        }

    }

    console.log(arr.join(' '));

}
