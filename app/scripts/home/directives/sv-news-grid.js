(function () {
    'use strict';

    angular.module('home')
        .directive('svNewsGrid', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-news-grid.html',
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
