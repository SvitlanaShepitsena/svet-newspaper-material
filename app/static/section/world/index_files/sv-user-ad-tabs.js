(function () {
    'use strict';
    angular.module('auth')
        .directive('svUserAdTabs', function (userAuth, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-ad-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return $state.current;
                    }, function (newValue, oldValue) {
                        var lastRouteChunk = _.last(newValue.name.split('.'));
                        $scope.selectedIndex = lastRouteChunk === 'promotion' ? 0 : 1;
                    });
                    $scope.user = userAuth.profile;
                }
            };
        });
})();
