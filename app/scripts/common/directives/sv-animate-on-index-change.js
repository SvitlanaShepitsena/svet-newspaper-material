(function () {
    'use strict';

    angular.module('common')
        .directive('svAnimateOnIndexChange', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
