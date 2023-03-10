function inventory(input) {

    let heroes = [];

    input.forEach(line => {

        let [name, level, inventory] = line.split(' / ');
        let currenrHero = {
            name,
            level: Number(level),
            inventory,
        }
        heroes.push(currenrHero);
    });

    heroes.sort((a, b) => a.level - b.level)

    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.inventory}`);
    });
}
inventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])