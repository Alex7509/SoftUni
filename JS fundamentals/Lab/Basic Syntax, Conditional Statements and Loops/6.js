function solve(day, age) {
    let price = 0;
    if (age < 0 || age > 122) {
        console.log('Error!');
        return;
    }
    if (day === 'Weekday') {
        if (age <= 18) {
            price = 12;
        } else if (age <= 64) {
            price = 18;
        } else if (age <= 122) {
            price = 12;
        }
    } else if (day === 'Weekend') {
        if (age <= 18) {
            price = 15;
        } else if (age <= 64) {
            price = 20;
        } else if (age <= 122) {
            price = 15;
        }
    } else if (day === 'Holiday') {
        if (age <= 18) {
            price = 5;
        } else if (age <= 64) {
            price = 12;
        } else if (age <= 122) {
            price = 10;
        }
    }
    console.log(`${price}$`);

}
solve('Holiday', 19);