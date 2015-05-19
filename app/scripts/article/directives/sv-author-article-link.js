(function () {
    'use strict';
    angular.module('article')
        .directive('svAuthorArticleLink', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-author-article-link.html',
                scope: {
                    article: '='
                },
                link: function ($scope, el, attrs) {
                    $scope.editArticle = function (active) {
                        $state.go('app.user.create-article({uid:user.userName,artId:news.fbkey}');
                    }
                }
            };
        });
})();
