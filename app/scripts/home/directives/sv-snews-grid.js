(function () {
    'use strict';

    angular.module('home')
        .directive('svSnewsGrid', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-snews-grid.html',
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
