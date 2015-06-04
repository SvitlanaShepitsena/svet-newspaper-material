(function () {
    'use strict';

    angular.module('custom')
        .directive('svNavLinkCustom', function () {
            return {
                replace: true,
                templateUrl: 'scripts/custom/directives/sv-nav-link-custom.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
