(function () {
    'use strict';

    angular.module('events')
        .directive('svSvetEventsCalendar', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-svet-events-calendar.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
