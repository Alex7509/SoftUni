function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    let parsed = JSON.parse(input);

    let resultArr = [];

    for (let data of parsed) {
        let obj = {
            area: area.call(data),
            volume: vol.call(data)
        }
        resultArr.push(obj);
    }
    return resultArr;
}
