(function () {
    'use strict';
    angular.module('auth')
        .directive('svUserAdTabs', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-ad-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                }
            };
        });
})();
