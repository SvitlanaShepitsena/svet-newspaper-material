(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svManagerDropdown', function (user) {
            return {
                templateUrl: 'scripts/auth/manager/directives/sv-manager-dropdown.html',
                scope: {
                    logout: '&'
                },
                link: function ($scope, el, attrs) {
                    $scope.user = user;
                }
            };
        });
})();
