(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserProfileNav', function ($rootScope,UserGroupsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-profile-nav.html',
                scope: {},

                link: function ($scope, el, attrs) {
                    $scope.user = $rootScope.user;
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);

                    };

                }
            };
        });
})();
