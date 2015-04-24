(function () {
    'use strict';

    angular.module('home')
        .directive('svMainLoader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-main-loader.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
