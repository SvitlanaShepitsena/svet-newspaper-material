(function () {
    'use strict';

    angular.module('auth')
        .directive('svManagerDropdown', function (CurrentUserServ) {
            return {
                templateUrl: 'scripts/auth/directives/sv-manager-dropdown.html',
                scope: {
                    user: '=',
                    logout: '&'
                },
                link: function ($scope, el, attrs) {
                    $scope.user = CurrentUserServ.get();


                }
            };
        });
})();
