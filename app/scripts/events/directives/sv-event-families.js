(function () {
    'use strict';

    angular.module('events')
        .directive('svEventFamilies', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-families.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
