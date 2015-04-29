(function () {
    'use strict';

    angular.module('classified')
        .filter('clType', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
