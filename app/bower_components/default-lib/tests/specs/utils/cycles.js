var getGlobal = require('default-lib').getGlobal;
var cycleKeys = require('default-lib').cycleKeys;
var cycleStopKey = cycleKeys.stopKey;
var cycleStopObject = cycleKeys.stopObject;
var cycle = require('default-lib').cycle;
var reversiveCycle = require('default-lib').reversiveCycle;

describe('utils/cycles/*', function () {

    it('cycleStopKey is define', function () {
        expect(cycleStopKey).toBeDefined();
    });
    it('cycleStopObject is define', function () {
        expect(cycleStopObject).toBeDefined();
    });

    //
    // tests helpers
    //

    var undefined,
        global = getGlobal();

    function Storages () {
        var storages = this;
        storages.itemsStorage = [];
        storages.indexesStorage = [];
        storages.cycleableStorage = [];
        storages.dataStorage = [];
        storages.ctxStorage = [];
    }

    //Info Comment [dmitry.makhnev] because jasmine or karma (or karma+jasmine) is very async an have sme problems
    function createWriterForStorages (storages) {
        return function writeToStorages (item, index, cycleable, data) {
            outsideStorageWriter(storages, item, index, cycleable, data, this);
        }
    }

    function outsideStorageWriter(storages, item, index, cycleable, data, ctx) {
        storages.itemsStorage.push(item);
        storages.indexesStorage.push(index);
        storages.cycleableStorage.push(cycleable);
        storages.dataStorage.push(data);
        storages.ctxStorage.push(ctx);
    }

    function compareArraysItems (message, array1, array2) {
        describe(message, function () {
            it('arrays have identical lengths', function () {
                expect(array1.length).toBe(array2.length);
            });
            //Info Comment [dmitry.makhnev] because jasmine or karma (or karma+jasmine) is very async an have sme problems
            function check (i) {
                it('array1[' + i + '] is identical for array2[' + i + ']', function () {
                    expect(array1[i]).toBe(array2[i]);
                });
            }
            for (var i = 0, iMax = array1.length; i < iMax; i += 1) {
                check(i);
            }
        });
    }
    
    function allArraysItemsIs (message, array, item, itemName) {
        describe(message, function () {
            it('array is not empty', function () {
                expect(array.length).not.toBe(0);
            });
            //Info Comment [dmitry.makhnev] because jasmine or karma (or karma+jasmine) is very async an have sme problems
            function check (i) {
                it('array[' + i + '] is ' + (itemName || item), function () {
                    expect(array[i]).toBe(item);
                });
            }
            for (var i = 0, iMax = array.length; i < iMax; i += 1) {
                check(i);
            }
        });
    }

    function User () {
        var user = this;
        user.username = 'dmitrymakhnev';
        user.firstName = 'Dmitry';
        user.lastName = 'Makhnev';
        user.age = 23;
        user.work = 'ok.ru';
        user.email = 'dmitry.ivshin@gmail.com';
        user.specialty = 'front-end';
    }

    //
    // /tests helpers
    //

    describe('cycle()', function () {
        it('is define', function () {
            expect(cycle).toBeDefined();
        });

        it('is function', function () {
            expect(cycle).toEqual(jasmine.any(Function));
        });

        describe('array', function () {
            describe('array processing', function () {
                var array = [1, 2, 3, 4, 5, 6],
                    storages = new Storages;
                cycle(array, createWriterForStorages(storages));
                compareArraysItems('items is correct', storages.itemsStorage, [1, 2, 3, 4, 5, 6]);
                compareArraysItems('indexes is correct', storages.indexesStorage, [0, 1, 2, 3, 4, 5]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, array, 'input array');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('difficult array processing', function () {
                var array = [1, 2, 3, 4, 5, 6],
                    ctx = {},
                    storages = new Storages;
                cycle(array, createWriterForStorages(storages), 1, ctx, 2, 2);
                compareArraysItems('items is correct', storages.itemsStorage, [3, 5]);
                compareArraysItems('indexes is correct', storages.indexesStorage, [ 2, 4]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, array, 'input array');
                allArraysItemsIs('data is correct', storages.dataStorage, 1, '1');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, ctx, '{}');
            });

            describe('break array processing', function () {
                var array = [1, 2, 3, 4, 5, 6],
                    storages = new Storages(),
                    array2;
                array2 = cycle(
                    array,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 4) {
                            return cycleStopKey;
                        }
                    }
                );

                it('cycle return value is array', function () {
                    expect(array).toBe(array2);
                });

                compareArraysItems('items is correct', storages.itemsStorage, [1, 2, 3, 4, 5]);
                compareArraysItems('indexes is correct', storages.indexesStorage, [0, 1, 2, 3, 4]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, array, 'input array');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('break array processing with value', function () {
                var array = [1, 2, 3, 4, 5, 6],
                    storages = new Storages(),
                    result = {},
                    returnedResult;
                returnedResult = cycle(
                    array,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 4) {
                            cycleStopObject.result = result;
                            return cycleStopObject;
                        }
                    }
                );

                it('cycle return value is result', function () {
                    expect(result).toBe(returnedResult);
                });

                it('cycleStopObject is clean', function () {
                    expect(cycleStopObject.result).toBe(null);
                });

            });
        });



        describe('object', function () {

            describe('processing object', function () {
                var object = new User(),
                    storages = new Storages();

                cycle(object, createWriterForStorages(storages));

                compareArraysItems(
                    'items is correct',
                    storages.itemsStorage,
                    ['dmitrymakhnev', 'Dmitry', 'Makhnev', 23, 'ok.ru', 'dmitry.ivshin@gmail.com', 'front-end']
                );
                compareArraysItems(
                    'indexes is correct',
                    storages.indexesStorage,
                    ['username', 'firstName', 'lastName', 'age', 'work', 'email', 'specialty']
                );
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, object, 'input object');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');

            });

            describe('difficult processing object', function () {
                var object = new User(),
                    storages = new Storages(),
                    data = {},
                    ctx = {};

                cycle(object, createWriterForStorages(storages), data, ctx, 2, 2);

                compareArraysItems(
                    'items is correct',
                    storages.itemsStorage,
                    ['Makhnev', 'ok.ru', 'front-end']
                );
                compareArraysItems(
                    'indexes is correct',
                    storages.indexesStorage,
                    ['lastName', 'work', 'specialty']
                );

                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, object, 'input object');
                allArraysItemsIs('data is correct', storages.dataStorage, data, 'data');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, ctx, 'ctx');
            });

            describe('break object processing', function () {
                var object = new User(),
                    storages = new Storages(),
                    object2;
                object2 = cycle(
                    object,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 'work') {
                            return cycleStopKey;
                        }
                    }
                );

                it('cycle return value is object', function () {
                    expect(object).toBe(object2);
                });

                compareArraysItems(
                    'items is correct',
                    storages.itemsStorage,
                    ['dmitrymakhnev', 'Dmitry', 'Makhnev', 23, 'ok.ru']
                );
                compareArraysItems(
                    'indexes is correct',
                    storages.indexesStorage,
                    ['username', 'firstName', 'lastName', 'age', 'work']
                );
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, object, 'input object');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('break object processing with value', function () {
                var object = new User(),
                    storages = new Storages(),
                    result = {},
                    returnedResult;
                returnedResult = cycle(
                    object,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 'work') {
                            cycleStopObject.result = result;
                            return cycleStopObject;
                        }
                    }
                );

                it('cycle return value is result', function () {
                    expect(result).toBe(returnedResult);
                });

                it('cycleStopObject is clean', function () {
                    expect(cycleStopObject.result).toBe(null);
                });

            });

        });

        describe('string', function () {
            describe('string processing', function () {
                var string = '123456',
                    storages = new Storages;
                cycle(string, createWriterForStorages(storages));
                compareArraysItems('items is correct', storages.itemsStorage, ['1', '2', '3', '4', '5', '6']);
                compareArraysItems('indexes is correct', storages.indexesStorage, [0, 1, 2, 3, 4, 5]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, string, 'input string');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('difficult string processing', function () {
                var string = '123456',
                    ctx = {},
                    storages = new Storages;
                cycle(string, createWriterForStorages(storages), 1, ctx, 2, 2);
                compareArraysItems('items is correct', storages.itemsStorage, ['3', '5']);
                compareArraysItems('indexes is correct', storages.indexesStorage, [ 2, 4]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, string, 'input string');
                allArraysItemsIs('data is correct', storages.dataStorage, 1, '1');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, ctx, '{}');
            });

            describe('break string processing', function () {
                var string = '123456',
                    storages = new Storages(),
                    string2;
                string2 = cycle(
                    string,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 4) {
                            return cycleStopKey;
                        }
                    }
                );

                it('cycle return value is string', function () {
                    expect(string).toBe(string2);
                });

                compareArraysItems('items is correct', storages.itemsStorage, ['1', '2', '3', '4', '5']);
                compareArraysItems('indexes is correct', storages.indexesStorage, [0, 1, 2, 3, 4]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, string, 'input array');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('break string processing with value', function () {
                var string = '123456',
                    storages = new Storages(),
                    result = {},
                    returnedResult;
                returnedResult = cycle(
                    string,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 4) {
                            cycleStopObject.result = result;
                            return cycleStopObject;
                        }
                    }
                );

                it('cycle return value is result', function () {
                    expect(result).toBe(returnedResult);
                });

                it('cycleStopObject is clean', function () {
                    expect(cycleStopObject.result).toBe(null);
                });
            });
        });
    });

    describe('reversiveCycle()', function () {
        it('is define', function () {
            expect(reversiveCycle).toBeDefined();
        });

        it('is function', function () {
            expect(reversiveCycle).toEqual(jasmine.any(Function));
        });

        describe('array', function () {
            describe('array processing', function () {
                var array = [1, 2, 3, 4, 5, 6],
                    storages = new Storages;
                reversiveCycle(array, createWriterForStorages(storages));
                compareArraysItems('items is correct', storages.itemsStorage, [6, 5, 4, 3, 2, 1]);
                compareArraysItems('indexes is correct', storages.indexesStorage, [5, 4, 3, 2, 1, 0]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, array, 'input array');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('difficult array processing', function () {
                var array = [1, 2, 3, 4, 5, 6],
                    ctx = {},
                    storages = new Storages;
                reversiveCycle(array, createWriterForStorages(storages), 1, ctx, 2, 4);
                compareArraysItems('items is correct', storages.itemsStorage, [5, 3, 1]);
                compareArraysItems('indexes is correct', storages.indexesStorage, [4, 2, 0]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, array, 'input array');
                allArraysItemsIs('data is correct', storages.dataStorage, 1, '1');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, ctx, '{}');
            });

            describe('break array processing', function () {
                var array = [1, 2, 3, 4, 5, 6],
                    storages = new Storages(),
                    array2;
                array2 = reversiveCycle(
                    array,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 4) {
                            return cycleStopKey;
                        }
                    }
                );

                it('cycle return value is array', function () {
                    expect(array).toBe(array2);
                });

                compareArraysItems('items is correct', storages.itemsStorage, [6, 5]);
                compareArraysItems('indexes is correct', storages.indexesStorage, [5, 4]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, array, 'input array');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('break array processing with value', function () {
                var array = [1, 2, 3, 4, 5, 6],
                    storages = new Storages(),
                    result = {},
                    returnedResult;
                returnedResult = reversiveCycle(
                    array,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 4) {
                            cycleStopObject.result = result;
                            return cycleStopObject;
                        }
                    }
                );

                it('cycle return value is result', function () {
                    expect(result).toBe(returnedResult);
                });

                it('cycleStopObject is clean', function () {
                    expect(cycleStopObject.result).toBe(null);
                });

            });
        });



        describe('object', function () {

            describe('processing object', function () {
                var object = new User(),
                    storages = new Storages();

                reversiveCycle(object, createWriterForStorages(storages));

                compareArraysItems(
                    'items is correct',
                    storages.itemsStorage,
                    ['front-end', 'dmitry.ivshin@gmail.com', 'ok.ru', 23, 'Makhnev', 'Dmitry', 'dmitrymakhnev']
                );
                compareArraysItems(
                    'indexes is correct',
                    storages.indexesStorage,
                    ['specialty', 'email', 'work', 'age', 'lastName', 'firstName', 'username']
                );
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, object, 'input object');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, getGlobal(), 'global');

            });

            describe('difficult processing object', function () {
                var object = new User(),
                    storages = new Storages(),
                    data = {},
                    ctx = {};

                reversiveCycle(object, createWriterForStorages(storages), data, ctx, 2, 5);

                function User () {
                    var user = this;
                    user.username = 'dmitrymakhnev';
                    user.firstName = 'Dmitry';
                    user.lastName = 'Makhnev';
                    user.age = 23;
                    user.work = 'ok.ru';
                    user.email = 'dmitry.ivshin@gmail.com';
                    user.specialty = 'front-end';
                }

                compareArraysItems(
                    'items is correct',
                    storages.itemsStorage,
                    ['dmitry.ivshin@gmail.com', 23, 'Dmitry']
                );
                compareArraysItems(
                    'indexes is correct',
                    storages.indexesStorage,
                    ['email', 'age', 'firstName']
                );

                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, object, 'input object');
                allArraysItemsIs('data is correct', storages.dataStorage, data, 'data');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, ctx, 'ctx');
            });

            describe('break object processing', function () {
                var object = new User(),
                    storages = new Storages(),
                    object2;
                object2 = reversiveCycle(
                    object,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 'work') {
                            return cycleStopKey;
                        }
                    }
                );

                it('cycle return value is object', function () {
                    expect(object).toBe(object2);
                });

                compareArraysItems(
                    'items is correct',
                    storages.itemsStorage,
                    ['front-end', 'dmitry.ivshin@gmail.com', 'ok.ru']
                );
                compareArraysItems(
                    'indexes is correct',
                    storages.indexesStorage,
                    ['specialty', 'email', 'work']
                );
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, object, 'input object');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('break object processing with value', function () {
                var object = new User(),
                    storages = new Storages(),
                    result = {},
                    returnedResult;
                returnedResult = reversiveCycle(
                    object,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 'work') {
                            cycleStopObject.result = result;
                            return cycleStopObject;
                        }
                    }
                );

                it('cycle return value is result', function () {
                    expect(result).toBe(returnedResult);
                });

                it('cycleStopObject is clean', function () {
                    expect(cycleStopObject.result).toBe(null);
                });

            });

        });

        describe('string', function () {
            describe('string processing', function () {
                var string = '123456',
                    storages = new Storages;
                reversiveCycle(string, createWriterForStorages(storages));
                compareArraysItems('items is correct', storages.itemsStorage, ['6', '5', '4', '3', '2', '1']);
                compareArraysItems('indexes is correct', storages.indexesStorage, [5, 4, 3, 2, 1, 0]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, string, 'input string');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('difficult string processing', function () {
                var string = '123456',
                    ctx = {},
                    storages = new Storages;

                reversiveCycle(string, createWriterForStorages(storages), 1, ctx, 2, 4);
                compareArraysItems('items is correct', storages.itemsStorage, ['5', '3', '1']);
                compareArraysItems('indexes is correct', storages.indexesStorage, [4, 2, 0]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, string, 'input string');
                allArraysItemsIs('data is correct', storages.dataStorage, 1, '1');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, ctx, '{}');
            });

            describe('break string processing', function () {
                var string = '123456',
                    storages = new Storages(),
                    string2;
                string2 = reversiveCycle(
                    string,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 4) {
                            return cycleStopKey;
                        }
                    }
                );

                it('cycle return value is string', function () {
                    expect(string).toBe(string2);
                });

                compareArraysItems('items is correct', storages.itemsStorage, ['6', '5']);
                compareArraysItems('indexes is correct', storages.indexesStorage, [5, 4]);
                allArraysItemsIs('cycleable is correct', storages.cycleableStorage, string, 'input array');
                allArraysItemsIs('data is correct', storages.dataStorage, undefined, 'undefined');
                allArraysItemsIs('ctx is correct', storages.ctxStorage, global, 'global');
            });

            describe('break string processing with value', function () {
                var string = '123456',
                    storages = new Storages(),
                    result = {},
                    returnedResult;
                returnedResult = reversiveCycle(
                    string,
                    function (item, index, cycleable, data) {
                        outsideStorageWriter(storages, item, index, cycleable, data, this);
                        if (index === 4) {
                            cycleStopObject.result = result;
                            return cycleStopObject;
                        }
                    }
                );

                it('cycle return value is result', function () {
                    expect(result).toBe(returnedResult);
                });

                it('cycleStopObject is clean', function () {
                    expect(cycleStopObject.result).toBe(null);
                });
            });
        });

    });

});