function solution() {

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    let macros = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    function manager(line) {
        let [command, microEl, quantity] = line.split(' ');
        quantity = Number(quantity);

        switch (command) {
            case 'restock':
                macros[microEl] += quantity;
                return 'Success';
                break;

            case 'prepare':

                for (let el in recipes[microEl]) {

                    if (recipes[microEl][el] * quantity > macros[el]) {
                        return `Error: not enough ${el} in stock`;
                    }
                    macros[el] -= recipes[microEl][el] * quantity;
                }
                return 'Success'
                break;

            case 'report':
                let output = [];

                for (let key in macros) {
                    output.push(`${key}=${macros[key]}`)
                }
                return output.join(' ');
                break;
        }
    }

    return manager;
}
