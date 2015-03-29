(function () {
    'use strict';

    angular.module('home')
        .directive('svLeftClickHandler', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-left-click-handler.html',
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
