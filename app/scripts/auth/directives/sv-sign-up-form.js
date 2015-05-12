(function () {
    'use strict';
    angular.module('auth')
        .directive('svSignUpForm', function (ProfileServ, UserServ, $state, toastr, CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-sign-up-form.html',
                scope: {
                    title: '@',
                    name: '@',
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
                    $scope.createSvetAccount = function () {
                        if ($scope.signUpForm.$invalid) {
                            $scope.signUpForm.userName.$touched = true;
                            $scope.signUpForm.email.$touched = true;
                            $scope.signUpForm.password.$touched = true;
                            return;
                        }
                        ProfileServ.createSvetUser($scope.user.email, $scope.user.password,$scope.user.userName).then(function (user) {
                                //if ($scope.userV && $scope.user.name) {
                                //    user.userName = $scope.user.name.toLocaleLowerCase();
                                //}
                                //CurrentUserServ.setUser(user).then(function (user) {
                                //    toastr.success('You are successfully registered')
                                //    $state.go('app.user.dashboard', {uid: user.userName});
                                //});
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
