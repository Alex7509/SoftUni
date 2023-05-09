function solve() {

  let buttons = document.querySelectorAll('button');

  buttons[0].addEventListener('click', generate);
  buttons[1].addEventListener('click', buy);

  function generate() {
    let input = JSON.parse(document.querySelectorAll('textarea')[0].value)
    let tableBody = document.getElementsByTagName('tbody')[0];

    for (let item of input) {
      let tableRow = document.createElement('tr');
      tableRow.innerHTML = `<td><img src="${item.img}"></td>` +
        `<td><p>${item.name}</p></td>` +
        `<td><p>${item.price}</p></td>` +
        `<td><p>${item.decFactor}</p></td>` +
        `<td><input type="checkbox"></td>`;

      tableBody.appendChild(tableRow);
    }
  }

  function buy() {
    let output = document.querySelectorAll('textarea')[1];
    let checkBoxes = Array.from(document.querySelectorAll('tbody input:checked'));
    let resArr = [];
    let totalPrice = 0;
    let avgDecoration = 0;


    for (let el of checkBoxes) {
      let parent = el.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll('p'));
      resArr.push(data[0].textContent)
      totalPrice += Number(data[1].textContent);
      avgDecoration += Number(data[2].textContent) / checkBoxes.length;
    }

    output.value = `Bought furniture: ${resArr.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecoration}`;
  }
}