(function () {
    'use strict';

    angular.module('auth')
        .directive('svForgotPass', function ($mdDialog) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-forgot-pass.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.showPasswordModal = function () {

                        $mdDialog.show(
                            {
                                controller: PasswordRecoveryCtrl,
                                templateUrl: 'scripts/common/views/terms-conditions-classified.html',
                            }
                        );
                    };
                    function PasswordRecoveryCtrl($scope, $mdDialog) {
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
