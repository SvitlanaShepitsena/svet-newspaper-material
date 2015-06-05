(function () {
    'use strict';

    angular.module('article')
        .directive('svAuthorHumanize', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-author-humanize.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
