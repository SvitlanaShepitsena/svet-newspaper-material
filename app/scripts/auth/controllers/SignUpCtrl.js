(function () {
    'use strict';

    angular.module('auth')
        .controller('SignUpCtrl', function ($scope, AuthServ, $rootScope) {
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

        });
})();

