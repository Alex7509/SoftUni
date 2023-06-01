const { assert } = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('Check for symmetry.', () => {

    it('Should return false for any input that is not array.', () => {
        assert.equal(isSymmetric(1), false);
    })

    it('Should return false if nput array is not correct type', () => {
        assert.equal(isSymmetric([1, '1']), false)
    })

    it('Should return false if array is not symmetrical.', () => {
        assert.equal(isSymmetric([4, 3, 2, 1]), false)
    })


    it('Should return true if the input array is symmetric.', () => {
        assert.equal(isSymmetric([1, 2, 2, 1]), true);
    })

    it('Should return true if the input array is symmetric.', () => {
        assert.equal(isSymmetric(['a', 'b', 'b', 'a']), true);
    })
})