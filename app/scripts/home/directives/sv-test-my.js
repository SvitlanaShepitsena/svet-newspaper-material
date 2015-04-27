(function () {
    'use strict';

    angular.module('home')
        .directive('svTestMy', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-test-my.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
