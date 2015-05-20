(function () {
    'use strict';

    angular.module('events')
        .directive('svOneEventPoster', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event-poster.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
