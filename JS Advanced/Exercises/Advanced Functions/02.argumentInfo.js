function solve(...arguments) {

    let obj = {};

    for (let el of arguments) {
        let type = typeof (el);
        console.log(`${type}: ${el}`);

        if (!obj.hasOwnProperty(type)) {
            obj[type] = 0;
        }

        obj[type]++;
    }

    let entries = Object.entries(obj);

    entries.sort((a, b) => {
        return b[1] - a[1];
    })

    entries.forEach(el => {
        console.log(`${el[0]} = ${el[1]}`);
    })
}
