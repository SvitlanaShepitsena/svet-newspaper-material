var getObjectSafely = require('default-lib').getObjectSafely;

describe('utils/objects/getObjectSafely()', function () {

    it('is define', function () {
        expect(getObjectSafely).toBeDefined();
    });

    it('is function', function () {
        expect(getObjectSafely).toEqual(jasmine.any(Function));
    });

    describe('set for define object and properties', function () {
        var fourth = {},
            object = {
                first: {
                    second: {
                        third: {
                            fourth: fourth
                        }
                    }
                }
            },
            foundFourth,
            settingValue = 10;

        foundFourth = getObjectSafely(object, 'first', 'second', 'third', 'fourth');

        it('correct found', function () {
            expect(foundFourth).toBe(fourth);
        });

        it('correct set', function () {
            foundFourth.value = settingValue;
            expect(object.first.second.third.fourth.value).toBe(settingValue);
        });

    });

    it('correct when some property is not object', function () {
        var object = {
                first: {
                    second: 'I\'m not object'
                }
            },
            fourth;

        fourth = getObjectSafely(object, 'first', 'second', 'third', 'fourth');
        expect(fourth).toBe(fourth);

    });


    describe('set for undefined properties', function () {
        var object = {},
            settingValue = 10;

        getObjectSafely(object, 'first', 'second', 'third', 'fourth').value = settingValue;

        it('\'first\' property is object', function () {
            expect(object.first).toEqual(jasmine.any(Object));
        });

        it('\'second\' property is object', function () {
            expect(object.first.second).toEqual(jasmine.any(Object));
        });

        it('setting value is correct', function () {
            expect(object.first.second.third.fourth.value).toBe(settingValue);
        });

    });


});