(function () {
    'use strict';
    angular.module('article')
        .directive('svOneArticleLink', function ($stateParams) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-article-link.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.sectionName = $stateParams.sectionName;
                }
            };
        });
})();
