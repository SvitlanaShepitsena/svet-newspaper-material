(function () {
    'use strict';

    angular.module('events')
        .directive('svImgHeight', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
