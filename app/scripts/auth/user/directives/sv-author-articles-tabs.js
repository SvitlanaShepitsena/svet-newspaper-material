(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthorArticlesTabs', function (ArticleServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-author-articles-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    //$scope.sectionName = $stateParams.sectionName;
                    $scope.articles = ArticleServ.all();
                }
            };
        });
})();
