(function () {
    'use strict';

    angular.module('auth')
        .directive('svSignUpForm', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-sign-up-form.html',
                scope: {},
                bindToController: {

                },
                controllerAs: 'ctrl',
                controller: function ($scope, AuthServ, $rootScope) {
                    var signUp = this;

                    signUp.user = {
                        email: '',
                        pass: ''

                    }
                    signUp.createAccount = function () {
                        AuthServ.createUser(signUp.user.email, signUp.user.pass).then(function (user) {
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
