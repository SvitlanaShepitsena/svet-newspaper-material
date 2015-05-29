(function () {
    'use strict';

    angular.module('article')
        .directive('svDropdownVal', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
