(function () {
    'use strict';

    angular.module('events')
        .directive('svSvMuseum2015', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-sv-museum-2015.html',
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
