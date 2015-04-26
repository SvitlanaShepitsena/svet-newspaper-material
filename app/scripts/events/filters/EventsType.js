(function () {
    'use strict';

    angular.module('events')
        .filter('#lname#', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
