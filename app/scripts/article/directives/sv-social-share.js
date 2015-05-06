(function () {
    'use strict';
    angular.module('article')
        .directive('svSocialShare', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-social-share.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
