(function () {
    'use strict';

    angular.module('home')
        .directive('svTestAttr', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
