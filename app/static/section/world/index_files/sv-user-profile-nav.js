(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserProfileNav', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-profile-nav.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                }
            };
        });
})();
