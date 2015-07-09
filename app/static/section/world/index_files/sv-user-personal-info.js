(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserPersonalInfo', function (toastr, userAuth, UsersServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-personal-info.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.userName = {value: angular.copy(userAuth.profile.userName), label: 'userName'};
                    $scope.oldUserName=userAuth.profile.userName;
                    $scope.user = userAuth.profile;
                    $scope.saveUserName = function (property, formValid) {
                        if (formValid) {
                            if ($scope.personalInfoForm.$valid) {
                                property.value = property.value.replace(/\s+/g, '-').toLowerCase();
                                UsersServ.saveUserProperty(property, userAuth.key).then(function (success) {
                                    toastr.success('Saved');
                                })
                            }
                        }
                    };
                }
            };
        });
})();
