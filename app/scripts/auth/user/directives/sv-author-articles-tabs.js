(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthorArticlesTabs', function (userAuth, ArticlesServ,toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-author-articles-tabs.html',
                scope: {},
                controller: function ($scope) {
                    var that = this;

                    that.removeOneArticle= function (articleKey) {
                        ArticlesServ.remove(articleKey).then(function () {
                           toastr.info('article has been deleted');
                        })
                    }
                },
                link: function ($scope, el, attrs) {
                    //$scope.sectionName = $stateParams.sectionName;
                    $scope.selectedIndex = 0;
                    $scope.user = userAuth.profile;
                    var articles = ArticlesServ.all();

                    articles.$loaded().then(function () {
                        $scope.articles = articles;
                        articles.$watch(function () {
                            $scope.articles = articles;
                        })
                    })
                }
            };
        });
})();
