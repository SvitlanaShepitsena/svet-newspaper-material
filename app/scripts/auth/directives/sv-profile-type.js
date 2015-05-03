(function () {
    'use strict';
    angular.module('auth')
        .directive('svProfileType', function (UserGroupsServ,CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-profile-type.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        if (newValue === oldValue) return;

                        $scope.user = newValue;
                    });

                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);
                    };
                }
            };
        });
})();
