(function () {
    'use strict';

    angular.module('article')
        .directive('svUrlDecode', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
