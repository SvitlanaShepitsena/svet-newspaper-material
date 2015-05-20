(function () {
    'use strict';

    angular.module('events')
        .directive('svOnePoster', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-poster.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
