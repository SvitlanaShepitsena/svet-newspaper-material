(function () {
    'use strict';
    angular.module('auth')
        .directive('svLoginForm', function (toastr,AuthServ, $rootScope, $state,CurrentUserServ) {
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
                        password: '12345'
                    }
                    $scope.singIn = function () {
                        AuthServ.loginPassword($scope.user.email, $scope.user.password).then(function (user) {
                            $rootScope.user = user;
                            CurrentUserServ.setUser(user);
                            $state.go('app.user.dashboard', {uid: user.userName || user.fname})
                        }).catch(function (error) {
                            toastr.error(error.message);
                        })
                    }
                }
            };
        });
})();
