(function () {
    'use strict';
    angular.module('auth')
        .directive('svLoginForm', function (toastr, AuthServ, $state, CurrentUserServ, UserGroupsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-login-form.html',
                scope: {
                    headerTitle: '@',
                    login: '@',
                    email: '@',
                    password: '@',
                    registerAccount: '@',
                    newUser: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.user = {
                        email: 'alex2@gmail.com',
                        //email: 'Icie_Ledner@yahoo.com',
                        password: '123456'
                    }
                    $scope.singIn = function () {
                        AuthServ.loginPassword($scope.user.email, $scope.user.password).then(function (user) {
                                if (UserGroupsServ.isInGroup('manager')) {
                                    $state.go('app.manager.dashboard', {uid: user.id});
                                } else{
                                    $state.go('app.user.dashboard', {uid: user.userName});

                                }
                        }).catch(function (error) {
                            toastr.error(error.message);
                        })
                    }
                }
            };
        });
})();
