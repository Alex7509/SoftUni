function validate() {

    let input = document.getElementById('email');
    let regexp = /^[a-z]+@[a-z]+\.[a-z]+$/g;

    input.addEventListener('change', (event) => {
        if (!regexp.test(input.value)) {
            event.target.className = 'error'
        } else {
            event.target.className = '';
        }
    })
}