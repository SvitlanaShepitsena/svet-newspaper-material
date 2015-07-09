(function () {
    'use strict';
    angular.module('auth')
        .directive('svCreateArticleBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-create-article-btn.html',
                scope: {
                    isBlog:'='
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
