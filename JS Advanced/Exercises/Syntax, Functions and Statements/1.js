function solve(fruit, weightInGrams, pricePerKg) {

    let weightInKg = weightInGrams / 1000;
    let priceNeeded = weightInKg * pricePerKg;

    console.log(`I need $${priceNeeded.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80)