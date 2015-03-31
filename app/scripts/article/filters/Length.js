(function () {
    'use strict';

    angular.module('article')
        .filter('Length', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
