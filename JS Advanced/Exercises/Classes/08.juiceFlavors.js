function solve(input) {

    let bottles = {};
    let flavors = {};

    for (const line of input) {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!flavors.hasOwnProperty(juice)) {
            flavors[juice] = 0;
        }

        flavors[juice] += quantity;

        while (flavors[juice] >= 1000) {

            if (bottles.hasOwnProperty(juice)) {
                bottles[juice]++;
            } else {
                bottles[juice] = 1;
            }

            flavors[juice] -= 1000;
        }
    }

    for (const juice in bottles) {
        console.log(`${juice} => ${bottles[juice]}`);
    }
}