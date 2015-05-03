(function () {
    'use strict';

    angular.module('ad')
        .filter('userList', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
