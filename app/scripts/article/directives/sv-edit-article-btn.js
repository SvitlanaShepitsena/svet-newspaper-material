(function () {
    'use strict';
    angular.module('article')
        .directive('svEditArticleBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-edit-article-btn.html',
                link: function ($scope, el, attrs) {
                    console.log($scope.news);
                }
            };
        });
})();
