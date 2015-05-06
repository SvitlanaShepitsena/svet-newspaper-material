(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svNewsGrid', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home/directives/sv-news-grid.html',
                scope: {
                    sectionNews: '='
                },
                link: function ($scope, el, attrs) {
                    $rootScope.$watch('newsGrid', function (newVal) {
                        $scope.newsGrid = newVal;
                    })
                }
            };
        });
})();
