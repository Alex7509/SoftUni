function race(input) {

    let listOfRacers = input.shift().split(', ');
    let object = {};

    let letters = /[A-Za-z]+/g;
    let digits = /\d+/g;

    let line = input.shift();

    while (line !== 'end of race') {

        let name = line.match(letters).join('');
        let numbers = line.match(digits).join('');


        if (listOfRacers.includes(name)) {

            let distance = 0;

            for (let num of numbers) {
                distance += Number(num);
            }

            if (!object.hasOwnProperty(name)) {
                object[name] = distance;
            } else {
                object[name] += distance;
            }

        }

        line = input.shift();
    }

    let arr = Object.entries(object);
    let result = arr.sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${result[0][0]}`);
    console.log(`2nd place: ${result[1][0]}`);
    console.log(`3rd place: ${result[2][0]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])