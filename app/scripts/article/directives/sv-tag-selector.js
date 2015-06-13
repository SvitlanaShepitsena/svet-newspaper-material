(function () {
    'use strict';

    angular.module('article')
        .directive('svTagSelector', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
