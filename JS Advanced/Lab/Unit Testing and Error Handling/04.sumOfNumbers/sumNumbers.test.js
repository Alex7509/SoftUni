const sum = require('./sumNumbers');
const { assert } = require('chai');

describe('Should return sum of numbers in array.', () => {
    it('Result.', () => {
        assert.equal(sum([1, 2, 3]), 6);
    })
})

