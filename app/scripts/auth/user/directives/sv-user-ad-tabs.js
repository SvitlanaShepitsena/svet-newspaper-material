(function () {
    'use strict';
    angular.module('auth')
        .directive('svUserAdTabs', function (userAuth, $state) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-ad-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.selectedIndex = $state.is('app.user.ad.classified') ? 1 : 0;
                    $scope.user = userAuth.profile;
                }
            };
        });
})();
