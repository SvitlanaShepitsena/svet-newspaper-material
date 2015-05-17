(function () {
    'use strict';
    angular.module('article')
        .directive('svArticleStatus', function (ArticleServ) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-status.html',
                scope: {
                    key: '=',
                    property: '@',
                    chBox:'=',
                    lbl:'@'
                },
                link: function ($scope, el, attrs) {
                    var status = ArticleServ.getStatus($scope.key, $scope.property);
                    status.$bindTo($scope, 'status').then(function () {
                    });
                }
            };
        });
})();
