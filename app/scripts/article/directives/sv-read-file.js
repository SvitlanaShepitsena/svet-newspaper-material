(function () {
    'use strict';

    angular.module('article')
        .directive('svReadFile', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
