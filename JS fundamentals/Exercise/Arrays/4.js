function solve(array, rotation) {

    for (let i = 0; i < rotation; i++) {
        let move = array.shift();
        array.push(move);
    }
    console.log(array.join(' '));

}
