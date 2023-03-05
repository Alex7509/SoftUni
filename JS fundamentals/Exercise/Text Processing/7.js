function cutAndReverse(text) {

    const firstText = text
        .slice(0, text.length / 2)
        .split('')
        .reverse()
        .join('');

    const secondText = text
        .slice(text.length / 2)
        .split('')
        .reverse()
        .join('');

    console.log(firstText);
    console.log(secondText);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')