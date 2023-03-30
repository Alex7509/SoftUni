function solve(steps, footPrintM, speedKmh) {

    let distanceInM = steps * footPrintM;
    let speedMInSeconds = speedKmh / 3.6
    let time = distanceInM / speedMInSeconds;
    let rest = Math.floor(distanceInM / 500);
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Number((time - (timeInMin * 60)).toFixed(0));
    let timeInH = Math.floor(time / 3600);
    timeInMin += rest;
    timeInH += Math.floor(timeInMin / 60);
    timeInMin = timeInMin % 60;

    let resultH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
    let resultM = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
    let resultS = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;

    console.log(`${resultH}:${resultM}:${resultS}`);

}
solve(4000, 0.60, 5);