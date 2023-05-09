function addItem() {
    let item = document.getElementById('items');
    let input = document.getElementById('newItemText');

    let newItem = input.value;

    let li = document.createElement('li');
    li.textContent = newItem;
    item.appendChild(li);

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#'

    deleteBtn.addEventListener('click', function (event) {
        event.target.parentElement.remove();
    })

    item.appendChild(li);
    li.appendChild(deleteBtn);

    input.value = '';
}