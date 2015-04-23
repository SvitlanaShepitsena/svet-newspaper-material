(function () {
    'use strict';

    angular.module('home')
        .directive('svNavBarMedia', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-nav-bar-media.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
