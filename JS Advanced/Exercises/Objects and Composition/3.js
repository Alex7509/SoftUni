function solve(order) {

    let carInfo = {};
    carInfo.model = order.model;

    if (order.power <= 90) {
        carInfo.engine = {
            power: 90,
            volume: 1800
        };
    } else if (order.power <= 120) {
        carInfo.engine = {
            power: 120,
            volume: 2400
        };
    } else {
        carInfo.engine = {
            power: 200,
            volume: 3500
        };
    }

    if (order.carriage == 'hatchback') {
        carInfo.carriage = {
            type: 'hatchback',
            color: order.color
        };
    } else {
        carInfo.carriage = {
            type: 'coupe',
            color: order.color
        };
    }

    let wheels = [];
    let size = order.wheelsize;

    if (size % 2 === 0) {
        size--;
    }
    carInfo.wheels = [size, size, size, size];

    return carInfo;
}
solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});