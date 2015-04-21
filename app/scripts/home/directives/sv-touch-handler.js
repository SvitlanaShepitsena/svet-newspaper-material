(function () {
    'use strict';

    angular.module('home')
        .directive('svTouchHandler', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-touch-handler.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
