(function () {
    'use strict';

    angular.module('article')
        .directive('svEditorArticleHomeThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-editor-article-home-thumb.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
