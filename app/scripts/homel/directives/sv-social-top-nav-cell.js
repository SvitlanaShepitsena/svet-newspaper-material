(function () {
    'use strict';

    angular.module('homel')
        .directive('svSocialTopNavCell', function () {
            return {
                replace: true,
                templateUrl: 'scripts/homel/directives/sv-social-top-nav-cell.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
