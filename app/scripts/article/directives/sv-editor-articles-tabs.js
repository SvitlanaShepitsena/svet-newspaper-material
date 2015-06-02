(function () {
    'use strict';
    angular.module('article')
        .directive('svEditorArticlesTabs', function (userAuth, ArticlesServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-editor-articles-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    var articles = ArticlesServ.all();
                    articles.$loaded().then(function () {
                        $scope.articles = articles;
                        articles.$watch(function () {
                            $scope.articles = articles;
                        });
                    });
                    $scope.sortableOptions = {
                        update: function (e, ui) {
                            console.log(e);
                            console.log(ui);
                        },
                        axis: 'y'
                    };
                }
            };
        });
})();
