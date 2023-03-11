function furniture(input) {

    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+[\.]*\d+)!(?<quantity>\d+)/g;

    let sum = 0;
    console.log('Bought furniture:');

    let command = input.shift();

    while (command !== 'Purchase') {
        let productArr = pattern.exec(command);

        while (productArr !== null) {

            let productName = productArr[1];
            let price = Number(productArr[2]);
            let quantity = Number(productArr[3])

            sum += quantity * price;

            console.log(productName);

            productArr = pattern.exec(command);
        }

        command = input.shift()
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])