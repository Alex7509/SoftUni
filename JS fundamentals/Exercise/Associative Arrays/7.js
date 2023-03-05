function aMinerTask(input) {

    const result = {};

    for (let i = 0; i < input.length; i += 2) {
        const resource = input[i];

        if (!result.hasOwnProperty(resource)) {
            result[resource] = 0;
        }
        result[resource] += Number(input[i + 1]);
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
aMinerTask(['Gold', '155',
    'Silver', '10',
    'Copper', '17'])