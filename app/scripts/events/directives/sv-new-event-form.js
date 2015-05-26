(function () {
    'use strict';
    angular.module('events')
        .directive('svNewEventForm', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-new-event-form.html',
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
