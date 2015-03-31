(function () {
    'use strict';

    angular.module('home')
        .directive('svSectionSeleceHandler', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-section-selece-handler.html',
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
