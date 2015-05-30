(function () {
    'use strict';

    angular.module('events')
        .directive('svOneEventThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event-thumb.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
