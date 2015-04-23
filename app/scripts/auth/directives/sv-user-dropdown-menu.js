(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserDropdownMenu', function (UserGroupsServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-user-dropdown-menu.html',
                scope: {
                    user: '=',
                    logout:'&'

                },
                link: function ($scope, el, attrs) {
	                console.log($scope.user);
                    $scope.isInGroup = function (group) {
                        return UserGroupsServ.isInGroup(group);

                    };
                }
            };
        });
})();
