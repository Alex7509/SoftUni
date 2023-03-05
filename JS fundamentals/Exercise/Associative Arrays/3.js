function piccolo(input) {

    let list = [];

    for (const el of input) {
        let line = el.split(', ');
        let command = line[0];
        let number = line[1];

        if (command === 'IN' && !list.includes(number)) {
            list.push(number);
        } else if (command === 'OUT' && list.includes(number)) {
            list.splice(list.indexOf(number), 1);
        }
    }

   let sorted = list.sort((a,b) => a.localeCompare(b));

    if (sorted.length > 0) {
        console.log(sorted.join('\n'));
    } else {
        console.log("Parking Lot is Empty");
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])