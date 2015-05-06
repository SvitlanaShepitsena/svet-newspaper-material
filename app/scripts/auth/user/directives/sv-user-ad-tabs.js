(function () {
    'use strict';
    angular.module('auth')
        .directive('svUserAdTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-ad-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
