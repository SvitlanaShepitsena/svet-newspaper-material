(function () {
    'use strict';

    angular.module('home')
        .directive('svLoader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-loader.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
