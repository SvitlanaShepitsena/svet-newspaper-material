(function () {
    'use strict';

    angular.module('auth')
        .directive('svSignUpForm', function (UserServ, $state, toastr) {
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

                    //$scope.user = {
                    //    name: faker.internet.userName(),
                    //    email: faker.internet.email(),
                    //    password: '12345'
                    //};
                    $scope.createAccount = function () {
                        if ($scope.signUpForm.$invalid) {
                            $scope.signUpForm.userName.$touched = true;
                            $scope.signUpForm.email.$touched = true;
                            $scope.signUpForm.password.$touched = true;
                            return;
                        }
                        AuthServ.createUser($scope.user.email, $scope.user.password).then(function (user) {
                                user.name = $scope.user.name;
                                UserServ.saveNewUser(user);

                                $rootScope.user = user;
                                toastr.success('You are succesfully registered')
                                $state.go('app.manager.dashboard', {uid: user.name});
                            }
                        )
                    }
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
