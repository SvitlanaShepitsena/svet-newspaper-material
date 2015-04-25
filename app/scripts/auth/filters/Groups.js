(function () {
    'use strict';

    angular.module('auth')
        .filter('Groups', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
