(function () {
    'use strict';

    angular.module('auth')
        .directive('svLoginForm', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-login-form.html',
                scope: {
                    title: '@',
                    login: '@',
                    email: '@',
                    password: '@',
                    registerAccount: '@',
                    newUser: '@',

                    registering: '@',
                    conditions: '@',
                    registered: '@'
                },
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope, AuthServ, $rootScope, $state) {
                    var login = this;

                    login.user = {
                        email: 'alex@svet.com',
                        password: '12345'
                    }

                    login.singIn = function () {
                        AuthServ.loginPassword(login.user.email, login.user.password).then(function (user) {
                            $rootScope.user = user;
                            $state.go('app.home');

                        })
                    }

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
