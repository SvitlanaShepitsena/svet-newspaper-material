(function () {
    'use strict';
    angular.module('auth')
        .directive('svForgotPass', function ($mdDialog, toastr, AuthenticationServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-forgot-pass.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.showPasswordModal = function () {
                        $mdDialog.show(
                            {
                                controller: PasswordRecoveryCtrl,
                                templateUrl: 'scripts/auth/views/password-recovery.html'
                            }
                        );
                    };
                    function PasswordRecoveryCtrl($scope, $mdDialog) {
                        $scope.sendPasswordRecovery = function (email) {
                            AuthenticationServ.resetPassword(email).then(function () {
                                toastr.info("Password reset email sent successfully!");
                                $scope.hide();
                                $scope.user.email = '';
                            }).catch(function (error) {
                                toastr.error("Error: ", error);
                            });
                        };
                        $scope.hide = function () {
                            $mdDialog.hide();
                        };
                        $scope.cancel = function () {
                            $mdDialog.cancel();
                        };
                        $scope.answer = function (answer) {
                            $mdDialog.hide(answer);
                        };
                    }
                }
            };
        });
})();
