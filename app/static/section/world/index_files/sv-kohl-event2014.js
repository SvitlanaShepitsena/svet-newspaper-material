(function () {
    'use strict';
    angular.module('events')
        .directive('svKohlEvent2014', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-kohl-event-2014.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
