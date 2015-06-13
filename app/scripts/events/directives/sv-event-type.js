(function () {
    'use strict';
    angular.module('events')
        .directive('svEventType', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-type.html',
                scope: {
                    type: '@'
                },
                link: function ($scope, el, attrs) {
                    console.log('run here sv-event-type.js');
                }
            };
        });
})();
