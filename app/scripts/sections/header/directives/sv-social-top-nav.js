(function () {
    'use strict';
    angular.module('sections.header')
        .directive('svSocialTopNav', function () {
            return {
                replace: true,
                templateUrl: 'sv-social-top-nav.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();