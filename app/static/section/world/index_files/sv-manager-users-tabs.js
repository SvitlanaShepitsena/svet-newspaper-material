(function () {
    'use strict';
    angular.module('auth.manager')
        .directive('svManagerUsersTabs', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-manager-users-tabs.html',
                controller: function ($scope) {
                    this.userTypesCount = function (count) {
                        $scope.count = count;

                    };
                },
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.selectedIndex = 0;
                }
            };
        });
})();
