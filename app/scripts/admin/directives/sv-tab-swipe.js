(function () {
    'use strict';

    angular.module('admin')
        .directive('svTabSwipe', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
