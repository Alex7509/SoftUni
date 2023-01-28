function solve(pagesNumber, readIn1Hour, days) {

    let totalTimeToRead = pagesNumber / readIn1Hour;
    let hoursPerDay = totalTimeToRead / days;
    console.log(hoursPerDay);

}
solve(212, 20, 2);
