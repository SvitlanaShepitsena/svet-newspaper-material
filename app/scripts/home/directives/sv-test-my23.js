(function () {
    'use strict';

    angular.module('home')
        .directive('svTestMy23', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-test-my23.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
