(function () {
    'use strict';
    angular.module('article')
        .directive('svAuthorArticleLink', function (userAuth, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-author-article-link.html',
                scope: {
                    article: '=',
                    index: '=',
                    isRank:'='
                },
                link: function ($scope, el, attrs) {

                    $scope.editArticle = function (active) {
                        $state.go('app.user.create-article', {uid: userAuth.profile.userName, artId: article.fbkey});
                    }
                }
            };
        });
})();
