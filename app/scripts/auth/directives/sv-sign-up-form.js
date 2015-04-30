(function () {
    'use strict';

    angular.module('auth')
        .directive('svSignUpForm', function (UserServ, $state, toastr,CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-sign-up-form.html',
                scope: {
                    title: '@',
                    name: '@',
                    email: '@',
                    password: '@',
                    register: '@',
                    registering: '@',
                    conditions: '@',
                    registered: '@',
                    login: '@'
                },

                controller: function ($scope, AuthServ, $rootScope) {

                    $scope.user = {
                        name: '',
                        email: '',
                        password: ''
                    };

                    $scope.user = {
                        name: faker.internet.userName(),
                        email: faker.internet.email(),
                        password: '123456'
                    };
                    $scope.createAccount = function () {
                        if ($scope.signUpForm.$invalid) {
                            $scope.signUpForm.userName.$touched = true;
                            $scope.signUpForm.email.$touched = true;
                            $scope.signUpForm.password.$touched = true;
                            return;
                        }
                        AuthServ.createUser($scope.user.email, $scope.user.password).then(function (user) {
                                user.userName = $scope.user.name.trim().toLocaleLowerCase();

                                UserServ.saveNewUser(user);
                                $rootScope.user = user;
                                CurrentUserServ.setUser(user);
                                toastr.success('You are successfully registered')
                                $state.go('app.user.dashboard', {uid: user.userName});
                            }
                        ).catch(function (error) {
                                toastr.error(error.message);

                                $scope.signUpForm.email.$invalid = true;
                                $scope.signUpForm.email.$touched = true;
                            })
                    }
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
