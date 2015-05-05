(function () {
    'use strict';

    angular.module('sections.home')
        .directive('svClientsNav', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-clients-nav.html',
                scope: {},
                bindToController: {
                    someObject: '=',
                    someString: '@',
                    someExpr: '&'
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
