(function () {
    'use strict';
    angular.module('auth')
        .directive('svProfileType', function (UserGroupsServ, CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-profile-type.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    console.log($scope.user);
                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        $scope.user = newValue;
                        console.log($scope.user);
                    });
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);
                    };
                }
            };
        });
})();
