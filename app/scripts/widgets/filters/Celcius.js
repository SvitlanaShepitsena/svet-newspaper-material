(function () {
    'use strict';

    angular.module('widgets')
        .filter('Celcius', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
