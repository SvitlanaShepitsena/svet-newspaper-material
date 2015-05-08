(function () {
    'use strict';

    angular.module('aritcle')
        .directive('svOneArticleLink', function () {
            return {
                replace: true,
                templateUrl: 'scripts/aritcle/directives/sv-one-article-link.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
