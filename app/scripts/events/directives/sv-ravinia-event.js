(function () {
    'use strict';

    angular.module('events')
        .directive('svRaviniaEvent', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-ravinia-event.html',
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
