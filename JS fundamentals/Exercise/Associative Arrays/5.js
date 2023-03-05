function cardGame(input) {

    let players = new Map();

    let cardPoints = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };

    let cardPower = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    };

    for (const line of input) {
        let splited = line.split(': ');
        let name = splited.shift();
        let cards = splited[0].split(', ');

        if (!players.has(name)) {
            players.set(name, new Set());
        }

        for (const card of cards) {
            players.get(name).add(card);
        }

    }

    for (const [key, value] of players) {
        let sum = 0;
        for (const card of value) {
            let splitedCard = card.split('');
            let powerOfCard = splitedCard.pop();
            let typeofCard = splitedCard.join('');
            let power = cardPower[powerOfCard];
            let type = cardPoints[typeofCard];
            sum += power * type;
        }
        console.log(`${key}: ${sum}`);
    }
}
cardGame(
    [
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
);