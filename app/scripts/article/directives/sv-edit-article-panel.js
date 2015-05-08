(function () {
    'use strict';

    angular.module('article')
        .directive('svEditArticlePanel', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-edit-article-panel.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
