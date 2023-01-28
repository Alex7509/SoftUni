function schoolGrades(input) {

    const studentsInfo = {};

    for (const line of input) {

        let splited = line.split(' ');
        let name = splited.shift();
        let grades = splited.map(n => Number(n));

        if (!studentsInfo[name]) {
            studentsInfo[name] = [];
        }

        studentsInfo[name] = studentsInfo[name].concat(grades);
    }

    let sorted = Object.entries(studentsInfo).sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name] of sorted) {
        let avg = (studentsInfo[name].reduce((x, y) => x + y) / studentsInfo[name].length).toFixed(2);
        console.log(`${name}: ${avg}`);
    }
}
