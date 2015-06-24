(function () {
    'use strict';

    angular.module('article')
        .directive('svOneComment', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-one-comment.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
