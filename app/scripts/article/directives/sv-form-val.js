(function () {
    'use strict';

    angular.module('article')
        .directive('svFormVal', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
