(function () {
    'use strict';

    angular.module('events')
        .directive('svOneEvent', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-one-event.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
