(function () {
    'use strict';
    angular.module('article')
        .directive('svDeleteArticleBtn', function () {
            return {
                replace: true,
                require:'^svAuthorArticlesTabs',
                templateUrl: 'scripts/article/directives/sv-delete-article-btn.html',
                scope: {
                    articleKey:'@'
                },
                link: function ($scope, el, attrs,ctrl) {
                    $scope.removeArticle = function () {
                        ctrl.removeOneArticle($scope.articleKey);

                    };
                }
            };
        });
})();
