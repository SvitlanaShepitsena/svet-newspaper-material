(function () {
    'use strict';

    angular.module('common')
        .directive('svNavLinkCustom', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-nav-link-custom.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
