(function () {
    'use strict';

    angular.module('auth')
        .directive('svSignUpForm', function (UserServ) {
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
                        name:'',
                        email: '',
                        password: ''
                    }
                    $scope.createAccount = function () {
                        AuthServ.createUser($scope.user.email, $scope.user.password).then(function (user) {
                                user.name = $scope.user.name;
                                UserServ.saveNewUser(user);

                                $rootScope.user = user;
                            }
                        )
                    }
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
