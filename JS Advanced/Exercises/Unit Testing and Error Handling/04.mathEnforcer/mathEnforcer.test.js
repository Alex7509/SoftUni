const { assert, expect } = require('chai');
const mathEnforcer = require("./mathEnforcer");


describe('Match enforcer.', () => {
    describe('Add five.', () => {
        it('Should retrn undefined if input is not a number.', () => {
            assert.equal(mathEnforcer.addFive('1'), undefined);
        })

        it('Should return input + five.', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-10), -5);
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.01);
        })
    });

    describe('Subtract ten.', () => {
        it('Should retrn undefined if input is not a number.', () => {
            assert.equal(mathEnforcer.subtractTen('1'), undefined);
        })

        it('Should return input - ten.', () => {
            assert.equal(mathEnforcer.subtractTen(15), 5);
            assert.equal(mathEnforcer.subtractTen(-15), -25);
            expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
        })
    });

    describe('Sum.', () => {
        it('Should retrn undefined if input is not a number.', () => {
            assert.equal(mathEnforcer.sum('1', '2'), undefined);
            assert.equal(mathEnforcer.sum(1, '2'), undefined);
            assert.equal(mathEnforcer.sum('1', 2), undefined);
        })

        it('Should return sum of the numbers.', () => {
            assert.equal(mathEnforcer.sum(1, 2), 3);
            assert.equal(mathEnforcer.sum(-2, -2), -4);
            expect(mathEnforcer.sum(4.5,4.5)).to.be.closeTo(9, 0.01);
        })
    });
});
