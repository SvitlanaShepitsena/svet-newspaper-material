(function () {
    'use strict';

    angular.module('header')
        .directive('svSocialBottomListCell', function () {
            return {
                replace: true,
                templateUrl: 'sv-social-bottom-list-cell.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
