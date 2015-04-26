(function () {
    'use strict';

    angular.module('events')
        .directive('svEventList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
