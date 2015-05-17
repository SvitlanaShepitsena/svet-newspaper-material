(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserPersonalInfo', function (toastr,userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-personal-info.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.userName={value: angular.copy(userAuth.profile.userName)};

                    $scope.saveUserProperty = function (property) {
                        UserServ.saveUserProperty(property, userAuth.key).then(function (success) {
                            toastr.success('Saved');
                        })
                    };
                }
            };
        });
})();
