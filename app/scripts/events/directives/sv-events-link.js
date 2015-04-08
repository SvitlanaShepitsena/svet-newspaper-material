(function () {
    'use strict';

    angular.module('events')
        .directive('svEventsLink', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-events-link.html',
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
