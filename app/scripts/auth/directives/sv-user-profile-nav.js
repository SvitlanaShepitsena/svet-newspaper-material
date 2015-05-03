(function () {
    'use strict';
    angular.module('auth')
        .directive('svUserProfileNav', function (CurrentUserServ, UserGroupsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-profile-nav.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        $scope.user = newValue;
                    });
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);
                    };
                }
            };
        });
})();
