(function () {
    'use strict';

    angular.module('home')
        .directive('svRightClickHandler', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-right-click-handler.html',
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
