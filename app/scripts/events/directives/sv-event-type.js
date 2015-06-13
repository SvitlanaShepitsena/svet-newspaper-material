(function () {
    'use strict';

    angular.module('events')
        .directive('svEventType', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-type.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
