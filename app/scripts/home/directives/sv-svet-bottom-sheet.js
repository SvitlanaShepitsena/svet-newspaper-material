(function () {
    'use strict';

    angular.module('home')
        .directive('svSvetBottomSheet', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-svet-bottom-sheet.html',
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
