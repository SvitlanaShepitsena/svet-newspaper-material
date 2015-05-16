(function () {
    'use strict';

    angular.module('home')
        .directive('svClassifiedHeaderPhone', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-classified-header-phone.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
