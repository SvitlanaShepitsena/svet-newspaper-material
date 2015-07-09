(function () {
    'use strict';
    angular.module('article')
        .directive('svOneArticleLink', function ($stateParams,defimg) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-article-link.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.sectionName = $stateParams.sectionName;
                    $scope.defimg = defimg;
                }
            };
        });
})();
