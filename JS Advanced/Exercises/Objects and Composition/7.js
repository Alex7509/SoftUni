function solve(input) {

    let keys = input.shift()
    let result = [];

    for (const line of input) {
        let [town, latitude, longitude] = line
            .split('|')
            .filter(w => w);

        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let obj = {
            Town: town.trim(),
            Latitude: Number(latitude),
            Longitude: Number(longitude)
        }
        result.push(obj);
    }

    console.log(JSON.stringify(result));
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])