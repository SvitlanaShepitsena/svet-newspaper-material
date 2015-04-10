(function () {
    'use strict';

    angular.module('events')
        .directive('svSvKohlEvent2014', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-sv-kohl-event-2014.html',
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
