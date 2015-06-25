(function () {
    'use strict';

    angular.module('common')
        .directive('svModalWindowSizeMedia', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
