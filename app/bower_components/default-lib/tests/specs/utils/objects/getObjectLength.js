var getObjectLength = require('default-lib').getObjectLength;

describe('utils/objects/getObjectLength()', function () {

    it('is define', function () {
        expect(getObjectLength).toBeDefined();
    });

    it('is function', function () {
        expect(getObjectLength).toEqual(jasmine.any(Function));
    });

    it('correct for empty object', function () {
        expect(getObjectLength({})).toBe(0);
    });

    it('correct for object with 2 properties', function () {
        expect(getObjectLength({
            firstName: 'Ivan',
            lastName: 'Ivanov'
        })).toBe(2);
    });

});