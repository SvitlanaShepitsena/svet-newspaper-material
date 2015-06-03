(function () {
    'use strict';
    angular.module('auth')
        .directive('svSignUpForm', function (ProfileServ, $state, toastr, AuthenticationServ, $mdDialog) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-sign-up-form.html',
                scope: {
                    headerTitle: '@',
                    name: '@',
                    register: '@',
                    registering: '@',
                    conditions: '@',
                    registered: '@',
                    login: '@'
                },
                controller: function ($scope) {
                    $scope.user = {
                        userName: '',
                        email: '',
                        password: ''
                    };
                    $scope.user = {
                        userName: faker.internet.userName(),
                        email: faker.internet.email(),
                        password: '123456',
                        acceptPolicy: true
                    };
                    $scope.createSvetUser = function () {
                        if ($scope.signUpForm.$invalid) {
                            $scope.signUpForm.userName.$touched = true;
                            $scope.signUpForm.email.$touched = true;
                            $scope.signUpForm.password.$touched = true;
                            return;
                        }
                        $scope.user.userName= $scope.user.userName.replace(/\s+/g,'-').toLowerCase();
                        ProfileServ.createSvetUser($scope.user.email, $scope.user.password, $scope.user.userName).then(function () {
                                AuthenticationServ.svetLogin($scope.user.email, $scope.user.password).then(function (profile) {
                                    $state.go('app.user.dashboard', {uid: profile.userName});
                                });
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
