(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthorArticlesTabs', function (ArticleServ, CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-author-articles-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    //$scope.sectionName = $stateParams.sectionName;
                    $scope.user = CurrentUserServ.get();
                    $scope.articles = ArticleServ.all();
                }
            };
        });
})();
