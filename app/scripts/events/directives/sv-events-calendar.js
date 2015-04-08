(function () {
    'use strict';

    angular.module('events')
        .directive('svEventsCalendar', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-events-calendar.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
