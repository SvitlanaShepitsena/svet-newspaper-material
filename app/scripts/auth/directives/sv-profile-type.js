(function () {
    'use strict';
    angular.module('auth')
        .directive('svProfileType', function ($rootScope, UserGroupsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-profile-type.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $rootScope.$watch('user', function (newValue) {
                        $scope.user = newValue;
                    }, true);
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);
                    };
                }
            };
        });
})();
