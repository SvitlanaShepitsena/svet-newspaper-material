(function () {
    'use strict';

    angular.module('events')
        .directive('svCreateEventBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-create-event-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
