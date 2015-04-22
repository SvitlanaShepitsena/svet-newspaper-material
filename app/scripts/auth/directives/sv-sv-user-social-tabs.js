(function () {
    'use strict';

    angular.module('auth')
        .directive('svSvUserSocialTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-sv-user-social-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
