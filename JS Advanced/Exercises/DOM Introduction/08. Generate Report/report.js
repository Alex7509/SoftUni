function generateReport() {
    let row = document.querySelectorAll('tbody tr');
    let header = document.querySelectorAll('thead tr th');
    let res = [];

    for (let i = 0; i < row.length; i++) {
        let tableData = row[i].cells;
        let obj = {};
        for (let j = 0; j < tableData.length; j++) {
            let infoHeader = header[j].childNodes;
            if (infoHeader[1].checked) {
                obj[infoHeader[0].textContent.trim().toLocaleLowerCase()] = tableData[j].textContent;
            }
        }
        res.push(obj);
    }
    let json = JSON.stringify(res);
    document.getElementById('output').textContent = json;
}