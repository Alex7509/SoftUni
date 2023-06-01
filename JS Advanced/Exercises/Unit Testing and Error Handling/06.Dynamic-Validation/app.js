function validate() {
    let inputEmail = document.getElementById('email');
    let regex = /[a-z]+\@[a-z]+\.[a-z]+/g;

    inputEmail.addEventListener('change', () => {
        if (!regex.test(inputEmail.value)) {
            inputEmail.classList.add('error');
        } else {
            inputEmail.classList.remove('error');
        }
    })
}