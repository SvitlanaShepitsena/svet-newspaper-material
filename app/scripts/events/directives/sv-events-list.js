(function () {
    'use strict';
    angular.module('events')
        .directive('svEventsList', function (ConnectionEventServ) {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-events-list.html',
                scope: {
                   events:'=',
                    eventFilter: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
