(function () {
    'use strict';

    angular.module('home')
        .directive('svTestMy', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
