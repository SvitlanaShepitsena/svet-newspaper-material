(function () {
    'use strict';

    angular.module('article')
        .directive('svEditorArticlesTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-editor-articles-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
