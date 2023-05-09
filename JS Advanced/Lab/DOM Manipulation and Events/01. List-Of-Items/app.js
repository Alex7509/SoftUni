function addItem() {

    let list = document.getElementById('items');
    let input = document.getElementById('newItemText');

    let newItem = input.value;

    let li = document.createElement('li');
    li.textContent = newItem;
    list.appendChild(li);

    input.value = '';
}