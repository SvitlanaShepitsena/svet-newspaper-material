(function () {
    'use strict';

    angular.module('article')
        .directive('svArticleThumbSection', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-thumb-section.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
