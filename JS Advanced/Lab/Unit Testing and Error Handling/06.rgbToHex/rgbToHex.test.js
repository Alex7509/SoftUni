const { assert, should } = require('chai');
const rgbToHexColor = require('./rgbToHex');

describe('Check for valid colors', () => {
    it('Should return undefined if red is invalid', () => {
        assert.equal(rgbToHexColor('1', 1, 1), undefined);
        assert.equal(rgbToHexColor(-1, 1, 1), undefined);
        assert.equal(rgbToHexColor(256, 1, 1), undefined);
    })

    it('Should return undefined if green is invalid', () => {
        assert.equal(rgbToHexColor(1, '1', 1), undefined);
        assert.equal(rgbToHexColor(1, -1, 1), undefined);
        assert.equal(rgbToHexColor(1, 256, 1), undefined);
    })

    it('Should return undefined if blue is invalid', () => {
        assert.equal(rgbToHexColor(1, 1, '1'), undefined);
        assert.equal(rgbToHexColor(1, 1, -1), undefined);
        assert.equal(rgbToHexColor(1, 1, 256), undefined); 
    })

    it('Should return the same color in hexadecimal format as a stringReturn the same color in hexadecimal format as a string.', () => {
        assert.equal(rgbToHexColor(244, 67, 54), '#F44336');
        assert.equal(rgbToHexColor(255, 255, 255), '#FFFFFF');
        assert.equal(rgbToHexColor(0, 0, 0), '#000000');
    })
})