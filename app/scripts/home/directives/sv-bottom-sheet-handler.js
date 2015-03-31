(function () {
    'use strict';

    angular.module('home')
        .directive('svBottomSheetHandler', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-bottom-sheet-handler.html',
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
