(function () {
    'use strict';

    angular.module('article')
        .directive('svArticleThumbTitle', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-thumb-title.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
