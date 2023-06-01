function printDeckOfCards(cards) {

    let result = [];

    let cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
    };

    for (let card of cards) {
        let face = card.slice(0, card.length - 1);
        let suit = card.slice(card.length - 1)

        if (!cardFaces.includes(face) || !cardSuits[suit]) {
            console.log(`Invalid card: ${card}`);
            return;
        }

        result.push(`${face}${cardSuits[suit]}`);
    }

    console.log(result.join(' '));
}
printDeckOfCards(['AS', '10D', 'KH', '2C', '1C']);