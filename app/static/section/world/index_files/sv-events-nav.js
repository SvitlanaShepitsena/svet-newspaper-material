(function () {
    'use strict';
    angular.module('events')
        .directive('svEventsNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-events-nav.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
