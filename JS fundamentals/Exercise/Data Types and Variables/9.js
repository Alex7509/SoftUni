function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let result = 0;
    let brokenShield = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        let currentLostFights = i;
        if (currentLostFights % 2 == 0) {
            result += helmetPrice;
        }
        if (currentLostFights % 3 == 0) {
            result += swordPrice;
        }
        if (currentLostFights % 2 == 0 && currentLostFights % 3 == 0) {
            result += shieldPrice;
            brokenShield++;
            if (brokenShield % 2 == 0) {
                result += armorPrice;
            }
        }
    }

    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);

}
solve(23, 12.50, 21.50, 40, 200)