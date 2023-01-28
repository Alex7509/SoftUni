function orders(order, quantity) {

    let result = 0;

    switch (order) {
        case 'coffee':
            price = 1.50;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'water':
            price = 1;
            break;
        case 'snacks':
            price = 2;
            break;
    }

    result = quantity * price;

    console.log(result.toFixed(2));

}
orders("water", 5);



