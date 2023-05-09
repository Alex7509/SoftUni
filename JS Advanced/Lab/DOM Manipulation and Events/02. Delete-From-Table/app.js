function deleteByEmail() {

    let inputEmali = document.getElementsByName('email')[0].value;
    let tableRows = document.querySelectorAll('tbody tr td');

    let isFound = false;

    for (let row of tableRows) {
        if (row.textContent === inputEmali) {
            row.parentElement.remove();
            isFound = true;
        }
    }

    let result = document.getElementById('result');
    result.textContent = isFound ? 'Deleted.' : 'Not found.';
}