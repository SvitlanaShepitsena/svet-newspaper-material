(function () {
    'use strict';

    angular.module('events')
        .directive('svEventsNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-events-nav.html',
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
