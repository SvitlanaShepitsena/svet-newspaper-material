(function () {
    'use strict';
    angular.module('events')
        .directive('svRaviniaEvent', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-ravinia-event.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
