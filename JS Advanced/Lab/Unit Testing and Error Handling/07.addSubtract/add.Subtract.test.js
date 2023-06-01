const { assert } = require('chai');
const createCalculator = require('./add.Subtract');

describe('Calculator test.', () => {
    it('Add should work', () => {
        let calculator = createCalculator();
        calculator.add(1);
        assert.equal(calculator.get(), 1);
    })

    it('Add should work', () => {
        let calculator = createCalculator();
        calculator.add(1);
        calculator.add(2)
        assert.equal(calculator.get(), 3);
    })

    it('Add should work', () => {
        let calculator = createCalculator();
        calculator.add(1);
        calculator.add('2')
        assert.equal(calculator.get(), 3);
    })

    it('Subtract should work', () => {
        let calculator = createCalculator();
        calculator.subtract(1);
        assert.equal(calculator.get(), -1);
    })

    it('Subtract should work', () => {
        let calculator = createCalculator();
        calculator.subtract(2);
        calculator.subtract(2)
        assert.equal(calculator.get(), -4);
    })

    it('Subtract should work', () => {
        let calculator = createCalculator();
        calculator.subtract(2);
        calculator.subtract('2')
        assert.equal(calculator.get(), -4);
    })
})