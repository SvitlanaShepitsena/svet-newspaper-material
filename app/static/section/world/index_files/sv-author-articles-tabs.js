(function () {
    'use strict';
    angular.module('auth')
        .directive('svAuthorArticlesTabs', function (userAuth, ArticlesServ, toastr, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-author-articles-tabs.html',
                scope: {},
                controller: function ($scope) {
                    var that = this;
                    that.removeOneArticle = function (articleKey) {
                        ArticlesServ.remove(articleKey).then(function () {
                            toastr.info('article has been deleted');
                        })
                    }
                },
                link: function ($scope, el, attrs) {
                    var current = $state.current.name;
                    $scope.$watch(function () {
                        return $state.current.name;
                    }, function (newValue, oldValue) {
                        if (!!newValue && newValue === 'app.user.news.blogs') {
                            $scope.selectedIndex = 1;
                        } else {
                            $scope.selectedIndex = 0;
                        }
                    });
                    $scope.user = userAuth.profile;
                    var articles = ArticlesServ.all();
                    articles.$loaded().then(function () {
                        $scope.loaded = true;

                        $scope.articles = articles;
                        articles.$watch(function () {
                            $scope.articles = articles;
                        })
                    })
                }
            };
        });
})();
