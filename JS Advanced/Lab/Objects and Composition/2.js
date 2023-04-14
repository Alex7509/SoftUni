function solve(input) {

    let townInfo = {};

    for (const line of input) {
        let [townName, population] = line.split(' <-> ');
        population = Number(population);

        if (townInfo[townName] === undefined) {
            townInfo[townName] = population;
        } else {
            townInfo[townName] += population;
        }
    }

    for (const townName in townInfo) {
        console.log(`${townName} : ${townInfo[townName]}`);
    }

}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])