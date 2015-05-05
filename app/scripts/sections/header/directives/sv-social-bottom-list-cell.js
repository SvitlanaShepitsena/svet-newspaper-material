(function () {
    'use strict';

    angular.module('sections.header')
        .directive('svSocialBottomListCell', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/header/directives/sv-social-bottom-list-cell.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
