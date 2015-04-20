(function () {
    'use strict';

    angular.module('auth')
        .directive('svLoginForm', function (toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-login-form.html',
                scope: {
                    title: '@',
                    login: '@',
                    email: '@',
                    password: '@',
                    registerAccount: '@',
                    newUser: '@'


                },
                controller: function ($scope, AuthServ, $rootScope, $state) {

                    $scope.user = {
                        email: 'alex@gmail.com',
                        password: '12345'
                    }

                    $scope.singIn = function () {
                        AuthServ.loginPassword($scope.user.email, $scope.user.password).then(function (user) {

                            $rootScope.user = user;
                            $state.go('app.svet-profile.author-dashboard');

                        }).catch(function (error) {
                            toastr.error(error.message);
                        })
                    }
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
