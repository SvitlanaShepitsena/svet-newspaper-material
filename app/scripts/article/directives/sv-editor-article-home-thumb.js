(function () {
    'use strict';
    angular.module('article')
        .directive('svEditorArticleHomeThumb', function (BlogServ, lastEditorPost) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-editor-article-home-thumb.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    BlogServ.setLastBlogLive().then(function () {
                        $scope.post = lastEditorPost.post;
                    });
                }
            };
        });
})();
