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
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
