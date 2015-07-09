(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svManagerDropdown', function (userAuth) {
            return {
                templateUrl: 'scripts/auth/manager/directives/sv-manager-dropdown.html',
                link: function ($scope, el, attrs) {
                    $scope.key = userAuth.key;
                    $scope.user = userAuth.profile;
                }
            };
        });
})();
