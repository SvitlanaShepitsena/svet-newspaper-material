(function () {
    'use strict';

    angular.module('classified')
        .filter('userCls', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
