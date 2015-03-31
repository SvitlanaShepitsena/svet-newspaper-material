(function () {
    'use strict';

    angular.module('home')
        .directive('svSectionSelectHandler', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-section-select-handler.html',
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
