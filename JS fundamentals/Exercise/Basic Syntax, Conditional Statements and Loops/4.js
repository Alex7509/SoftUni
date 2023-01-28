function solve(groupCount, typeOfGroup, day) {

    let price = 0;
    if (typeOfGroup === 'Students') {
        if (day === 'Friday') {
            price = 8.45;
        } else if (day === 'Saturday') {
            price = 9.80;
        } else if (day === 'Sunday') {
            price = 10.46;
        }
        if (groupCount >= 30) {
            price *= 0.85;
        }
    } else if (typeOfGroup === 'Business') {
        if (day === 'Friday') {
            price = 10.90;
        } else if (day === 'Saturday') {
            price = 15.60;
        } else if (day === 'Sunday') {
            price = 16;
        }
        if (groupCount >= 100) {
            groupCount -= 10;
        }
    } else if (typeOfGroup === 'Regular') {
        if (day === 'Friday') {
            price = 15;
        } else if (day === 'Saturday') {
            price = 20;
        } else if (day === 'Sunday') {
            price = 22.50;
        }
        if (groupCount >= 10 && groupCount <= 20) {
            price *= 0.95;
        }
    }
    price *= groupCount;
    console.log(`Total price: ${price.toFixed(2)}`);

}
solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");