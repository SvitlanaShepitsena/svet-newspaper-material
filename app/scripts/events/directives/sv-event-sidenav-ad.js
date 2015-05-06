(function () {
    'use strict';
    angular.module('events')
        .directive('svEventSidenavAd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-sidenav-ad.html',
                scope: {
                    eventTitle: '@',
                    body: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
