(function () {
    'use strict';
    angular.module('auth')
        .directive('svProfileType', function (userAuth, $state) {
            return {
                templateUrl: 'scripts/auth/directives/sv-profile-type.html',
                link: function ($scope, el, attrs) {
                    $scope.goToDashboard = function () {
                        if (userAuth.profile.role === 'manager') {
                            $state.go('app.manager.dashboard', {uid: userAuth.key});
                        } else {
                            $state.go('app.user.dashboard', {uid: userAuth.profile.userName});
                        }
                    };
                }
            };
        });
})();
