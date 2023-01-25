function loadingBar(number) {

    let percentSymbol = '%'.repeat(number / 10);
    let dotSymbol = '.'.repeat((100 - number) / 10);

    if (number === 100) {

        console.log('100%');
        console.log('Complete!');

    } else {

        console.log(`${number}% [${percentSymbol}${dotSymbol}]`);
        console.log('Still loading...');

    }
}
