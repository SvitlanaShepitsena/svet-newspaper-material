var customEvents = require('default-lib').customEvents;
var getGlobal = require('default-lib').getGlobal;

function createTarget () {
    var _global = getGlobal();
    if (_global.document) {
        return _global.document.createElement('div');
    }
    return {};
}

describe('modules/customEvents', function () {

    it('is define', function () {
        expect(customEvents).toEqual(jasmine.any(Object));
    });

    describe('calling add()', function () {
        it('3 parameters', function () {
            customEvents.add(createTarget(), 'check', function () {});
            expect(true).toBeTruthy();
        });
        it('3 parameters, ctx', function () {
            customEvents.add(createTarget(), 'check', function () {}, {});
            expect(true).toBeTruthy();
        });
        it('3 parameters, ctx, data', function () {
            customEvents.add(createTarget(), 'check', function () {}, {}, {});
            expect(true).toBeTruthy();
        });
        it('3 parameters, null ctx, data', function () {
            customEvents.add(createTarget(), 'check', function () {}, null, {});
            expect(true).toBeTruthy();
        });
        it('correct return', function () {
            var target = createTarget();
            var result;
            result = customEvents.add(target, 'check', function () {});
            expect(target).toBe(result);
        });
    });

    describe('calling remove()', function () {
        it('single, 3 parameters', function () {
            customEvents.remove(createTarget(), 'check', function () {});
            expect(true).toBeTruthy();
        });
        it('single, 3 parameters and ctx', function () {
            customEvents.remove(createTarget(), 'check', function () {}, {});
            expect(true).toBeTruthy();
        });
        it('correct return', function () {
            var target = createTarget();
            var result;
            result = customEvents.remove(target, 'check', function () {}, {});
            expect(result).toBe(target);
        });
        it('after add(), 3 parameters', function () {
            var target = createTarget();
            function handler () {}
            customEvents.add(target, 'check', handler);
            customEvents.remove(target, 'check', handler);
            expect(true).toBeTruthy();
        });
        it('after add(), 3 parameters and ctx', function () {
            var target = createTarget(),
                ctx = {};
            function handler () {}
            customEvents.add(target, 'check', handler, ctx);
            customEvents.remove(target, 'check', handler, ctx);
            expect(true).toBeTruthy();
        });
    });

    describe('calling dispatch()', function () {
        it('single, 2 parameters', function () {
            customEvents.dispatch(createTarget(), 'check');
            expect(true).toBeTruthy();
        });
        it('single, 2 parameters and data parameter', function () {
            customEvents.dispatch(createTarget(), 'check', 'testParameter');
            expect(true).toBeTruthy();
        });
        it('single, 2 parameters and data parameters', function () {
            customEvents.dispatch(createTarget(), 'check', 'testParameter1', 'testParameter2');
            expect(true).toBeTruthy();
        });

        it('correct return', function () {
            var target = createTarget();
            var result;
            result = customEvents.dispatch(target, 'check');
            expect(result).toBe(target);
        });
        it('after add()', function () {
            var target = createTarget();
            function handler () {}
            customEvents.add(target, 'check', handler);
            customEvents.dispatch(target, 'check');
            expect(true).toBeTruthy();
        });
        it('after add(), 3 parameters and parameter', function () {
            var target = createTarget();
            var ctx = {};
            function handler () {}
            customEvents.add(target, 'check', handler, ctx);
            customEvents.dispatch(target, 'check', 'test parameter');
            expect(true).toBeTruthy();

        });
        it('after add(), 3 parameters and parameters', function () {
            var target = createTarget();
            var ctx = {};
            function handler () {}
            customEvents.add(target, 'check', handler, ctx);
            customEvents.dispatch(target, 'check', 'test parameter', 'test parameter2');
            expect(true).toBeTruthy();
        });
    });

    describe('calling removeAll()', function () {
        it('single, 1 parameter', function () {
            customEvents.removeAll(createTarget());
            expect(true).toBeTruthy();
        });
        it('single, 2 parameters', function () {
            customEvents.removeAll(createTarget(), 'check');
            expect(true).toBeTruthy();
        });
        it('correct return', function () {
            var target = createTarget();
            var result;
            result = customEvents.removeAll(target);
            expect(result).toBe(target);
        });
        it('after add(), 1 parameter', function () {
            var target = createTarget();
            customEvents.add(target, 'check', function () {});
            customEvents.removeAll(target);
            expect(true).toBeTruthy();
        });

        it('after add(), 2 parameters', function () {
            var target = createTarget();
            customEvents.add(target, 'check', function () {});
            customEvents.removeAll(target, 'check');
            expect(true).toBeTruthy();
        });
    });

    describe('correct add() and dispatch() work', function () {
        it('single handler', function () {
            var target = createTarget();
            var eventName = 'testEvent';
            var isHandlerCalled = false;

            customEvents.add(target, eventName, function () {
                isHandlerCalled = true;
            });

            customEvents.dispatch(target, eventName);

            expect(isHandlerCalled).toBeTruthy();
        });
        it('2 handlers', function () {
            var target = createTarget();
            var eventName = 'testEvent';
            var handleCount = 0;

            customEvents.add(target, eventName, function () {
                handleCount += 1;
            });

            customEvents.add(target, eventName, function () {
                handleCount += 1;
            });

            customEvents.dispatch(target, eventName);

            expect(handleCount).toBe(2);
        });
        it('3 handler orders', function () {
            var target = createTarget();
            var eventName = 'testEvent';
            var result = '';

            customEvents.add(target, eventName, function () {
                result += '1';
            });
            customEvents.add(target, eventName, function () {
                result += '2';
            });
            customEvents.add(target, eventName, function () {
                result += '3';
            });

            customEvents.dispatch(target, eventName);

            expect(result).toBe('123');
              
        });

        it('2 different events', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var eventName2 = 'event 2';
            var handleCount = 0;

            customEvents.add(target, eventName, function () {
                handleCount += 1;
            });

            customEvents.add(target, eventName2, function () {
                handleCount += 5;
            });

            customEvents.dispatch(target, eventName);
            customEvents.dispatch(target, eventName2);

            expect(handleCount).toBe(6);
                    
        });

        it('correct ctx, when ctx assigned to add()', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var ctx = {};
            var result;
            
            customEvents.add(
                target,
                eventName,
                function () {
                    result = this;
                },
                ctx
            );

            customEvents.dispatch(target, eventName);

            expect(result).toBe(ctx);
            
        });

        it('correct ctx, when ctx not assigned to add()', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var result;

            customEvents.add(
                target,
                eventName,
                function () {
                    result = this;
                }
            );

            customEvents.dispatch(target, eventName);

            expect(result).toBe(target);
            
        });

        it('correct add() data parameter', function () {
            var target = createTarget();
            var eventName = 'testEvent';
            var data = {};
            var result;

            customEvents.add(
                target,
                eventName,
                function (data) {
                    result = data;
                },
                null,
                data
            );

            customEvents.dispatch(target, eventName);

            expect(result).toBe(data);
        });

        it('correct add() data parameter and dispatch() parameters', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var data = {};
            var parameter1 = '1';
            var parameter2 = '2';
            var parameter3 = '3';
            var dataCache;
            var parameter1Cache;
            var parameter2Cache;
            var parameter3Cache;

            customEvents.add(
                target,
                eventName,
                function (data, parameter1, parameter2, parameter3) {
                    dataCache = data;
                    parameter1Cache = parameter1;
                    parameter2Cache = parameter2;
                    parameter3Cache = parameter3;
                },
                null,
                data
            );

            customEvents.dispatch(target, eventName, parameter1, parameter2, parameter3);

            expect(dataCache).toBe(data);
            expect(parameter1Cache).toBe(parameter1);
            expect(parameter2Cache).toBe(parameter2);
            expect(parameter3Cache).toBe(parameter3);
        });

        it('correct add() data parameter and dispatch() parameters when first dispatch() parameter is undefined', function () {
                        
            var target = createTarget();
            var eventName = 'testEvent';
            var data = {};
            var parameter1;
            var parameter2 = '2';
            var parameter3 = '3';
            var dataCache;
            var parameter1Cache;
            var parameter2Cache;
            var parameter3Cache;

            customEvents.add(
                target,
                eventName,
                function (data, parameter1, parameter2, parameter3) {
                    dataCache = data;
                    parameter1Cache = parameter1;
                    parameter2Cache = parameter2;
                    parameter3Cache = parameter3;
                },
                null,
                data
            );

            customEvents.dispatch(target, eventName, parameter1, parameter2, parameter3);

            expect(dataCache).toBe(data);
            expect(parameter1Cache).toBe(parameter1);
            expect(parameter2Cache).toBe(parameter2);
            expect(parameter3Cache).toBe(parameter3);
                    
        });

        it('correct dispatch() parameters', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var parameter1 = '1';
            var parameter2 = '2';
            var parameter3 = '3';
            var parameter1Cache;
            var parameter2Cache;
            var parameter3Cache;

            customEvents.add(
                target,
                eventName,
                function (parameter1, parameter2, parameter3) {
                    parameter1Cache = parameter1;
                    parameter2Cache = parameter2;
                    parameter3Cache = parameter3;
                }
            );

            customEvents.dispatch(target, eventName, parameter1, parameter2, parameter3);

            expect(parameter1Cache).toBe(parameter1);
            expect(parameter2Cache).toBe(parameter2);
            expect(parameter3Cache).toBe(parameter3);
              
        });

        it('correct dispatch() parameters when first dispatch() parameter is undefined', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var parameter1;
            var parameter2 = '2';
            var parameter3 = '3';
            var parameter1Cache;
            var parameter2Cache;
            var parameter3Cache;

            customEvents.add(
                target,
                eventName,
                function (parameter1, parameter2, parameter3) {
                    parameter1Cache = parameter1;
                    parameter2Cache = parameter2;
                    parameter3Cache = parameter3;
                }
            );

            customEvents.dispatch(target, eventName, parameter1, parameter2, parameter3);

            expect(parameter1Cache).toBe(parameter1);
            expect(parameter2Cache).toBe(parameter2);
            expect(parameter3Cache).toBe(parameter3);
              
        });

        it('correct add() and dispatch() interaction for one event with and without data', function () {
            var target = createTarget();
            var eventName = 'testEvent';
            var data = {};
            var parameter1;
            var parameter2 = '2';
            var parameter3 = '3';
            var dataCache;
            var parameter1Cache;
            var parameter2Cache;
            var parameter3Cache;
            var parameter1CacheSecondHandler;
            var parameter2CacheSecondHandler;
            var parameter3CacheSecondHandler;
            var dataCacheThirdHandler;
            var parameter1CacheThirdHandler;
            var parameter2CacheThirdHandler;
            var parameter3CacheThirdHandler;

            customEvents.add(
                target,
                eventName,
                function (data, parameter1, parameter2, parameter3) {
                    dataCache = data;
                    parameter1Cache = parameter1;
                    parameter2Cache = parameter2;
                    parameter3Cache = parameter3;
                },
                null,
                data
            );

            customEvents.add(
                target,
                eventName,
                function (parameter1, parameter2, parameter3) {
                    parameter1CacheSecondHandler = parameter1;
                    parameter2CacheSecondHandler = parameter2;
                    parameter3CacheSecondHandler = parameter3;
                }
            );

            customEvents.add(
                target,
                eventName,
                function (data, parameter1, parameter2, parameter3) {
                    dataCacheThirdHandler = data;
                    parameter1CacheThirdHandler= parameter1;
                    parameter2CacheThirdHandler = parameter2;
                    parameter3CacheThirdHandler = parameter3;
                },
                null,
                data
            );

            customEvents.dispatch(target, eventName, parameter1, parameter2, parameter3);

            expect(dataCache).toBe(data);
            expect(parameter1Cache).toBe(parameter1);
            expect(parameter2Cache).toBe(parameter2);
            expect(parameter3Cache).toBe(parameter3);

            expect(parameter1CacheSecondHandler).toBe(parameter1);
            expect(parameter2CacheSecondHandler).toBe(parameter2);
            expect(parameter3CacheSecondHandler).toBe(parameter3);

            expect(dataCacheThirdHandler).toBe(data);
            expect(parameter1CacheThirdHandler).toBe(parameter1);
            expect(parameter2CacheThirdHandler).toBe(parameter2);
            expect(parameter3CacheThirdHandler).toBe(parameter3);
        });

    });

    describe('correct remove()', function () {
        it('correct once remove', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var isHandlerCalled = false;

            function handler () {
                isHandlerCalled = true;
            }

            customEvents.add(target, eventName, handler);

            customEvents.remove(target, eventName, handler);

            customEvents.dispatch(target, eventName);

            expect(isHandlerCalled).toBe(false);
        });

        it('correct add and remove one handler', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var isHandlerCalled = false;

            function handler () {
                isHandlerCalled = true;
            }

            customEvents.add(target, eventName, handler);

            customEvents.remove(target, eventName, handler);

            customEvents.dispatch(target, eventName);

            expect(isHandlerCalled).toBe(false);
            
        });

        it('correct add 2 handlers, remove 1', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var calledCount = 0;

            function handler () {
                calledCount += 1;
            }

            function handler2 () {
                calledCount += 1;
            }

            customEvents.add(target, eventName, handler);
            customEvents.add(target, eventName, handler2);

            customEvents.remove(target, eventName, handler);

            customEvents.dispatch(target, eventName);

            expect(calledCount).toBe(1);
        });

        it('correct remove by context', function () {
            
            var target = createTarget();
            var eventName = 'testEvent';
            var calledCtx;
            var ctx1 = {};
            var ctx2 = {};

            function handler () {
                calledCtx = this;
            }

            customEvents.add(target, eventName, handler, ctx1);
            customEvents.add(target, eventName, handler, ctx2);

            customEvents.remove(target, eventName, handler, ctx1);

            customEvents.dispatch(target, eventName);

            expect(calledCtx).toBe(ctx2);
                   
        });
    });


    it('correct removeAll', function () {

        var target = createTarget();
        var eventName = 'event for remove';
        var eventName2 = 'event for remove 2';
        var calledCount = 0;

        function handler () {
            calledCount += 1;
        }

        function handler2 () {
            calledCount += 1;
        }

        customEvents.add(target, eventName, handler);
        customEvents.add(target, eventName2, handler2);

        customEvents.removeAll(target);

        customEvents.dispatch(target, eventName);
        customEvents.dispatch(target, eventName2);

        expect(calledCount).toBe(0);
    });

    describe('turns', function () {


        it('add in dispatching process', function () {
            var target = createTarget();
            var eventName = 'check';
            var result = 0;

            function handler () {
                customEvents.add(target, eventName, handler2);
            }

            function handler2 () {
                result += 1;
            }

            customEvents.add(target, eventName, handler);
            customEvents.dispatch(target, eventName);
            customEvents.dispatch(target, eventName);

            expect(result).toBe(1);


        });

        it('remove in dispatching process', function () {
            var target = createTarget();
            var eventName = 'check';
            var result = 0;

            function handler () {
                customEvents.remove(target, eventName, handler2);
            }

            function handler2 () {
                result += 1;
            }

            customEvents.add(target, eventName, handler);
            customEvents.add(target, eventName, handler2);
            customEvents.dispatch(target, eventName);
            customEvents.dispatch(target, eventName);

            expect(result).toBe(1);

        });
    });

});