function storeProvision(arr1, arr2) {

    const products = {};

    for (let i = 0; i < arr1.length; i += 2) {
        let currentProduct = arr1[i];
        products[currentProduct] = Number(arr1[i + 1]);
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let currentProduct = arr2[i];

        if (!products.hasOwnProperty(currentProduct)) {
            products[currentProduct] = 0;
        }
        products[currentProduct] += Number(arr2[i + 1]);
    }

    for (const product in products) {
        console.log(`${product} -> ${products[product]}`);
    }
}
