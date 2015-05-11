(function () {
    'use strict';
    angular.module('article')
        .directive('svEditArticleBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-edit-article-btn.html',
                scope:{
                 news:'='
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
