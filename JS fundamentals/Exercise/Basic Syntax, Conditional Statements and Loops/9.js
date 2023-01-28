function solve(input) {

    let username = input[0];
    let counter = 0;
    let correctPassword = '';

    for (let k = username.length - 1; k >= 0; k--) {
        correctPassword += username[k];
    }

    for (let i = 1; i < input.length; i++) {
        let password = input[i];
        counter++;
        if (counter >= 4) {
            if (password !== correctPassword) {
                console.log(`User ${username} blocked!`);
                break;
            }
        }
        if (password !== correctPassword) {
            console.log('Incorrect password. Try again.');
        } else {
            console.log(`User ${username} logged in.`);
        }
    }
}
solve(['Acer', 'login', 'go', 'let me in', 'recA']);
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);