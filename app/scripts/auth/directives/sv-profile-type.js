(function () {
    'use strict';
    angular.module('auth')
        .directive('svProfileType', function (user) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-profile-type.html',
                link: function ($scope, el, attrs) {
                    $scope.user=user;
                }
            };
        });
})();
