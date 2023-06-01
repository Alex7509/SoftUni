function validate() {

    let submitBtn = document.getElementById('submit');
    let checkBox = document.getElementById('company');

    checkBox.addEventListener('change', () => {
        let fieldSet = document.getElementById('companyInfo');

        if (checkBox.checked) {
            fieldSet.style.display = 'block';
        } else {
            fieldSet.style.display = 'none';
        }
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let isVallidArr = [];

        let username = document.getElementById('username');
        let usernameRegex = /^[A-Za-z0-9]{3,20}$/g;

        let email = document.getElementById('email');
        let emailRegex = /^[^@.]+@[^@]*\.[^@]*$/g;

        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirm-password')
        let passwordRegex = /^([A-Za-z0-9_]{5,15})$/g;

        if (usernameRegex.test(username.value)) {
            username.style.borderColor = '';
            isVallidArr.push(true);
        } else {
            username.style.borderColor = 'red';
            isVallidArr.push(false);
        }

        if (emailRegex.test(email.value)) {
            email.style.borderColor = '';
            isVallidArr.push(true);
        } else {
            email.style.borderColor = 'red';
            isVallidArr.push(false);
        }

        if (passwordRegex.test(password.value) && password.value === confirmPassword.value) {
            password.style.borderColor = '';
            confirmPassword.style.borderColor = '';
            isVallidArr.push(true);
        } else {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isVallidArr.push(false);
        }

        if (checkBox.checked) {
            let companyNumber = document.getElementById('companyNumber');

            if (companyNumber.value >= 1000 && companyNumber.value <= 9999) {
                companyNumber.style.borderColor = '';
                isVallidArr.push(true);
            } else {
                companyNumber.style.borderColor = 'red';
                isVallidArr.push(false);
            }
        }

        let validDiv = document.getElementById('valid');

        if (isVallidArr.includes(false)) {
            validDiv.style.display = 'none';
        } else {
            validDiv.style.display = 'block';
        }
    });
}
