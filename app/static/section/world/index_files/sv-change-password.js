(function () {
    'use strict';

    angular.module('auth.user')
        .directive('svChangePassword', function (userAuth, $firebaseAuth, url, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-change-password.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.authObj = $firebaseAuth(new Firebase(url));

                    //fillForm();

                    $scope.changePassword = function () {
                        $scope.authObj.$changePassword({
                            email: userAuth.profile.email,
                            oldPassword: $scope.password.val,
                            newPassword: $scope.newPassword.val,
                        }).then(function () {
                            toastr.info("Password changed successfully!");
                            resetForm();
                        }).catch(function (error) {
                            toastr.error("Current Password is incorrect");
                        });
                    };

                    function fillForm() {
                        $scope.password = {val: '1234567'}
                        $scope.newPassword = {val: '1234567'}

                    };
                    function resetForm() {
                        $scope.password = {val: ''}
                        $scope.newPassword = {val: ''}

                    };
                }
            };
        });
})();
