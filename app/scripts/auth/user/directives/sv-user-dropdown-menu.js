(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserDropdownMenu', function (avatar,alex) {
            return {
                templateUrl: 'scripts/auth/user/directives/sv-user-dropdown-menu.html',
                link: function ($scope, el, attrs) {
                    $scope.defaultAvatar = avatar;
                    $scope.alexAvatar = alex;
                }
            };
        });
})();
