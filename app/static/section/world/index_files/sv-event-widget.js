(function () {
    'use strict';
    angular.module('events')
        .directive('svEventWidget', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-widget.html',
                scope: {
                    type: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
