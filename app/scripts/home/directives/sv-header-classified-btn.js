(function () {
    'use strict';

    angular.module('home')
        .directive('svHeaderClassifiedBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-header-classified-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
