(function () {
    'use strict';

    angular.module('events')
        .directive('svSvetEventsCalendar', function () {
            return {
                templateUrl: 'scripts/events/directives/sv-svet-events-calendar.html',
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
