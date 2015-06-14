(function () {
    'use strict';

    angular.module('article')
        .directive('svArticleMakeTopBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-article-make-top-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
