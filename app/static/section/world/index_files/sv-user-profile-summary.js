(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserProfileSummary', function (userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-profile-summary.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                }
            };
        });
})();
