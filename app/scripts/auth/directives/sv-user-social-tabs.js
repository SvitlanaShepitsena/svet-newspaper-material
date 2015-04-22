(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserSocialTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-social-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
