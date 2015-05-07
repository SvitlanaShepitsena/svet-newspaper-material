var getObjectFiled = require('default-lib').getObjectFiled;


describe('utils/objects/getObjectFiled', function () {
    it('is defined', function () {
        expect(getObjectFiled).toBeDefined();
    });

    /**
     *
     * @param {Number} nesting
     * @param {Number} generationType type for property generation
     * @return {Object}
     */
    function createMockObject (nesting, generationType) {
        var object = {};
        var current = object;
        var newObject;

        function getPropertyName (i) {
            var name,
                number = i + 1;
            switch (generationType) {
                case 1:
                    name = number;
                    break;
                case 2:
                    if ((i % 2) === 0) {
                        name = 'p_' + number;
                    } else {
                        name = number;
                    }
                    break;
                default:
                    name = 'p_' + number;
            }
            return name;
        }

        for (var i = 0; i < nesting; i += 1) {
            newObject = {};
            current[getPropertyName(i)] = newObject;
            current = newObject;
        }

        return object;
    }

    it('get by strings', function () {
        var mockObject = createMockObject(3);
        expect(getObjectFiled(mockObject, 'p_1', 'p_2', 'p_3')).toEqual(jasmine.any(Object));
    });

    it('get by numbers', function () {
        var mockObject = createMockObject(3, 1);
        expect(getObjectFiled(mockObject, 1, 2, 3)).toEqual(jasmine.any(Object));
    });

    it('get by array', function () {
        var mockObject = createMockObject(3);
        expect(getObjectFiled(mockObject, ['p_1', 'p_2', 'p_3'])).toEqual(jasmine.any(Object));
    });

    it('get by mixed', function () {
        var mockObject = createMockObject(3, 2);
        expect(getObjectFiled(mockObject, 1, 'p_2', 3)).toEqual(jasmine.any(Object));
    });

    it('get from object with arrays', function () {
        var mockObject = {
                p_1: [
                    null,
                    {
                        p_3: 10
                    }
                ]
            };

        expect(getObjectFiled(mockObject, 'p_1', 1, 'p_3')).toBe(10);
    });

    describe('undefined property', function () {
        it('get by strings', function () {
            var mockObject = createMockObject(3);
            expect(getObjectFiled(mockObject, 'p_1', 'p_22', 'p_3')).toBe(null);
        });

        it('get by numbers', function () {
            var mockObject = createMockObject(3, 1);
            expect(getObjectFiled(mockObject, 1, 22, 3)).toBe(null);
        });

        it('get by array', function () {
            var mockObject = createMockObject(3);
            expect(getObjectFiled(mockObject, ['p_1', 'p_22', 'p_3'])).toBe(null);
        });

        it('get by mixed', function () {
            var mockObject = createMockObject(3, 2);
            expect(getObjectFiled(mockObject, 1, 'p_22', 3)).toBe(null);
        });
    });

});