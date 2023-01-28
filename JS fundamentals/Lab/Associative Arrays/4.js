function storage(input) {

    const products = {};

    for (const line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!products.hasOwnProperty(product)) {
            products[product] = 0;
        }
        products[product] += quantity;
    }

    for (const [product, quantity] of Object.entries(products)) {
        console.log(`${product} -> ${quantity}`);
    }

}
