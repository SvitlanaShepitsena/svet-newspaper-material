(function () {
    'use strict';

    angular.module('common')
        .directive('svFadeIn', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
