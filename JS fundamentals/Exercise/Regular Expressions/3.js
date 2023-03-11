function softUniBarIncome(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g;

    let totalIncome = 0;
    let command = input.shift();

    while (command !== 'end of shift') {

        let currentData = pattern.exec(command);

        if (currentData) {

            let customer = currentData.groups['customer'];
            let product = currentData.groups['product'];
            let count = Number(currentData.groups['count']);
            let price = Number(currentData.groups['price']);

            let totalProductPrice = count * price;

            console.log(`${customer}: ${product} - ${totalProductPrice.toFixed(2)}`);
            totalIncome += totalProductPrice;

            command = input.shift();
            currentData = pattern.exec(command)
        } else {
            command = input.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);