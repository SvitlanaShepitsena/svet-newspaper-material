(function () {
    'use strict';

    angular.module('events')
        .directive('svKohlEvent', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-kohl-event.html',
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
