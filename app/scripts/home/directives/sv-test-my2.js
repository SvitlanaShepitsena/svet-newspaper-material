(function () {
    'use strict';

    angular.module('home')
        .directive('svTestMy2', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-test-my2.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
