function solve(input) {

    let cars = {};

    function createObjects() {
        return {
            create: function (name, inherit, parentName) {
                cars[name] = inherit ? Object.create(cars[parentName]) : {};
            },
            set: function (name, key, value) {
                cars[name][key] = value
            },
            print: function (name) {
                let output = [];
                for (let key in cars[name]) {
                    output.push(`${key}:${cars[name][key]}`);
                }
                console.log(output.join(','));
            }
        }
    }

    let res = createObjects();

    input.forEach(line => {
        let [command, ...values] = line.split(' ');

        res[command].apply(null, values);
    });
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])