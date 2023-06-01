const { assert } = require('chai');
const isOddOrEven = require('./evenOrodd');

describe('Is odd or even test.', () => {

    it('Should return undefined if input is not a string.', () => {
        assert.equal(isOddOrEven(5), undefined);
    })

    it('Should return even.', () => {
        assert.equal(isOddOrEven('abcd'), 'even');
    })

    it('Should return odd.', () => {
        assert.equal(isOddOrEven('abcde'), 'odd');
    })
})
