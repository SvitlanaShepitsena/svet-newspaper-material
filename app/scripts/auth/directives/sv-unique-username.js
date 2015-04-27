(function () {
    'use strict';

    angular.module('auth')
        .directive('svUniqueUsername', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
