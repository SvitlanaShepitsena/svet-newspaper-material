(function () {
    'use strict';

    angular.module('social')
        .directive('svSocialBottomListCell', function () {
            return {
                replace: true,
                templateUrl: 'scripts/social/directives/sv-social-bottom-list-cell.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
