function solve(year, month, day){

    let date = new Date(year, month -1, day - 1);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();

    console.log(`${y}-${m}-${d}`);

}
solve(2016, 9, 30);