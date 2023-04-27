function extractText() {

    let itemsList = document.querySelectorAll('ul li');
    let textArea = document.getElementById('result')

    for (let item of itemsList) {
        textArea.value += item.textContent + '\n';
    }
}
