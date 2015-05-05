(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svNewsGrid', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-news-grid.html',
                scope: {},
                bindToController: {
                    sectionNews: '='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    $rootScope.$watch('newsGrid', function (newVal) {
                        ctrl.newsGrid = newVal;
                    })
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
