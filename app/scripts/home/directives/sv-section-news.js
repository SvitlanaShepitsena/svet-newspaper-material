(function () {
    'use strict';

    angular.module('home')
        .directive('svSectionNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-section-news.html',
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
