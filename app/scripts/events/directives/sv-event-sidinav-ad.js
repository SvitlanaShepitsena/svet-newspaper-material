(function () {
    'use strict';

    angular.module('events')
        .directive('svEventSidinavAd', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-event-sidinav-ad.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
