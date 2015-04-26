(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserDropdownMenu', function (UserGroupsServ,$rootScope) {
            return {
                templateUrl: 'scripts/auth/directives/sv-user-dropdown-menu.html',
                scope: {
                    user: '=',
                    logout:'&'

                },
                link: function ($scope, el, attrs) {
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);

                    };

                    $rootScope.$watch('user', function (newValue, oldValue) {
                        $scope.user = newValue;
                    });
                }


            };
        });
})();
