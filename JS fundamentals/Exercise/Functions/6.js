function passwordValidator(password) {

    let passwordLength = password.length;
    let digitCount = 0;
    let bool = false;


    for (let i = 0; i < passwordLength; i++) {

        let current = password[i].charCodeAt();

        let isBigLetter = current >= 65 && current <= 90;
        let isSmallLetter = current >= 97 && current <= 122;
        let isDigit = current >= 48 && current <= 57;

        if (!isBigLetter && !isSmallLetter && !isDigit) {
            bool = true;
        }

        if (isDigit) {
            digitCount++;
        }

    }

    if (passwordLength < 6 || passwordLength > 10) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (bool) {
        console.log("Password must consist only of letters and digits");
    }

    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
    }

    if ((passwordLength >= 6 && passwordLength <= 10) && (!bool) && (digitCount >= 2)) {
        console.log('Password is valid');
    }
}
passwordValidator('Pa$s$s');
