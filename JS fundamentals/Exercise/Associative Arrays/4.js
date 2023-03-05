function partyTime(input) {

    let vipGuests = [];
    let regularGuest = [];

    let guestNumber = input.shift();

    while (guestNumber !== 'PARTY') {
        if (!isNaN(guestNumber[0])) {
            vipGuests.push(guestNumber);
        } else {
            regularGuest.push(guestNumber);
        }
        guestNumber = input.shift();
    }

    let allGuests = vipGuests.concat(regularGuest);

    for (const guest of input) {
        allGuests.splice(allGuests.indexOf(guest), 1);
    }

    console.log(allGuests.length);
    allGuests.forEach(guest => console.log(guest));
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);