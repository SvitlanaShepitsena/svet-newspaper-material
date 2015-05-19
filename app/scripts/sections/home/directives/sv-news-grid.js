(function () {
    'use strict';
    angular.module('sections.home')
        .directive('svNewsGrid', function ($rootScope) {
            return {
                replace: true,
                scope:{
                    news:'=',
                    exclude:'='
                },
                templateUrl: 'scripts/sections/home/directives/sv-news-grid.html',
                link: function ($scope, el, attrs) {
                    $scope.news= _.rest($scope.news, $scope.exclude);

                }
            };
        });
})();
