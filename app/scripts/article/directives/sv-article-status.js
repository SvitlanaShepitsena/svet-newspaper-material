(function () {
    'use strict';
    angular.module('article')
        .directive('svArticleStatus', function (ArticleServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-status.html',
                scope: {
                    key: '='
                },
                link: function ($scope, el, attrs) {

                    var status = ArticleServ.getDraftObj($scope.key);
                    status.$bindTo($scope, 'status').then(function () {
                        var s = status;
                    });
                }
            };
        });
})();
