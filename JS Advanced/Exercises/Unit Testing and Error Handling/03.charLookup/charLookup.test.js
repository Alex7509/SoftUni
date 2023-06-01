const { assert } = require('chai');
const lookupChar = require('./charLookup');

describe('Test.', () => {
    it('Should return undefined.', () => {
        assert.equal(lookupChar(1, 1), undefined);
        assert.equal(lookupChar('abcd', '1'), undefined);
    })

    it('Should return incorrect index.', () => {
        assert.equal(lookupChar('abcd', -1), 'Incorrect index');
        assert.equal(lookupChar('abcd', 50), 'Incorrect index')
    })

    it('Should return result if everything is valid.', () => {
        assert.equal(lookupChar('abcd', 3), 'd');
    })
})
