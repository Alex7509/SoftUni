function addItem() {

    let menu = document.getElementById('menu');
    let inputText = document.getElementById('newItemText');
    let inputValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.textContent = `${inputText.value}: ${inputValue.value}`;

    menu.appendChild(option);

    inputText.value = '';
    inputValue.value = '';
}