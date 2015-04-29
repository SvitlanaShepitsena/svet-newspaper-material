(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserAdTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-ad-tabs.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
