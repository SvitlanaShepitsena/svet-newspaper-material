(function () {
    'use strict';

    angular.module('events')
        .directive('svCallendar', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-callendar.html',
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
