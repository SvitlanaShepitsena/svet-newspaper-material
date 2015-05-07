var typesDetection = require('default-lib').typesDetection;

describe('utils/typesDetection', function () {
    var object = {},
        array = [],
        fn = function () {},
        string = '',
        number = 1,
        boolean = true,
        _null = null,
        undefined,
        _arguments,
        date = new Date(),
        regExp = /regExp/g,
        error = new Error('default error'),
        nodesList,
        htmlCollection;

    (function () {
        var div = document.createElement('div'),
            div2 = document.createElement('div');
        div.appendChild(div2);

        nodesList = div.childNodes;
        htmlCollection = div.getElementsByTagName('div');

    } ());

    (function () {
        _arguments = arguments;
    } ());

    function testType (typeName) {
        describe(typeName + ' detect', function () {
            it ('object is ' + (typeName === 'Object' ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](object)).toBe(typeName === 'Object');
                }
            );
            it ('array is ' + ((typeName === 'Array') || (typeName === 'Collection') ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](array)).toBe((typeName === 'Array') || (typeName === 'Collection'));
                }
            );
            it ('fn is ' + (typeName === 'Function' ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](fn)).toBe(typeName === 'Function');
                }
            );
            it ('string is ' + (typeName === 'String' ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](string)).toBe(typeName === 'String');
                }
            );
            it ('number is ' + (typeName === 'Number' ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](number)).toBe(typeName === 'Number');
                }
            );
            it ('boolean is ' + (typeName === 'Boolean' ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](boolean)).toBe(typeName === 'Boolean');
                }
            );
            it ('null is not ' + typeName,
                function () {
                    expect(typesDetection['is' + typeName](_null)).toBeFalsy();
                }
            );
            it ('undefined is not ' + typeName,
                function () {
                    expect(typesDetection['is' + typeName](undefined)).toBeFalsy();
                }
            );
            it ('arguments is ' + ((typeName === 'Arguments') || (typeName === 'Collection') ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](_arguments)).toBe((typeName === 'Arguments') || (typeName === 'Collection'));
                }
            );
            it ('date is ' + (typeName === 'Date' ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](date)).toBe(typeName === 'Date');
                }
            );
            it ('regExp is ' + (typeName === 'RegExp' ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](regExp)).toBe(typeName === 'RegExp');
                }
            );
            it ('error is ' + (typeName === 'Error' ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](error)).toBe(typeName === 'Error');
                }
            );

            it ('nodeList is ' + ((typeName === 'NodesCollection') || (typeName === 'Collection') ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](nodesList)).toBe((typeName === 'NodesCollection') || (typeName === 'Collection'));
                }
            );

            it ('htmlCollection is ' + ((typeName === 'NodesCollection') || (typeName === 'Collection') ? '' : 'not ') + typeName,
                function () {
                    expect(typesDetection['is' + typeName](htmlCollection)).toBe((typeName === 'NodesCollection') || (typeName === 'Collection'));
                }
            );


        });
    }

    testType('Object');
    testType('Array');
    testType('Function');
    testType('Number');
    testType('Boolean');
    testType('Arguments');
    testType('Date');
    testType('RegExp');
    testType('Error');
    testType('NodesCollection');
    testType('Collection');


});