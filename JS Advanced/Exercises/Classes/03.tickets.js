function solve(arr, sortingCriteria) {

    let result = [];

    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let line of arr) {
        let [destination, price, status] = line.split('|');
        price = Number(price);

        let ticket = new Tickets(destination, price, status);
        result.push(ticket);
    }

    switch (sortingCriteria) {
        case 'destination':
            result.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            })
            break;

        case 'price':
            result.sort((a, b) => {
                return a.price - b.price;
            })
            break;

        case 'status':
            result.sort((a, b) => {
                return a.status.localeCompare(b.status);
            })
            break;
    }

    return result;
}