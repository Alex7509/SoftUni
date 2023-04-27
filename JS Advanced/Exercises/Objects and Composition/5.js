function solve(input) {

    let result = {};

    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (result.hasOwnProperty(product)) {
            if (result[product].price > price) {
                result[product] = { price, town };
            }
        } else {
            result[product] = {
                price: price,
                town: town
            };
        }
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`);
    }

}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']); 