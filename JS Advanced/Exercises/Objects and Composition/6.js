function solve(catalogue) {

    let obj = {};

    for (const line of catalogue) {
        let [name, price] = line.split(' : ');
        let letter = name[0];
        price = Number(price);

        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = {};
        }
        obj[letter][name] = price;
    }

    let sortedByLetter = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    for (const letter of sortedByLetter) {
        console.log(letter);

        let sortedByProductName = Object.keys(obj[letter]).sort((a, b) => a.localeCompare(b));
        for (const product of sortedByProductName) {
            console.log(`  ${product}: ${obj[letter][product]}`);
        }
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);