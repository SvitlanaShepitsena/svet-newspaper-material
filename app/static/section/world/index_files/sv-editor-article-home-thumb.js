(function () {
    'use strict';
    angular.module('article')
        .directive('svEditorArticleHomeThumb', function (userAuth, BlogServ, lastEditorPost) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-editor-article-home-thumb.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    BlogServ.setLastBlogLive().then(function () {
                        $scope.post = lastEditorPost.post;
                    });
                }
            };
        });
})();
