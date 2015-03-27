(function () {
    'use strict';

    angular.module('auth')
        .controller('SignUpCtrl', function ($scope, AuthServ) {
            var signUp = this;

            signUp.user = {
                email: '',
                pass: ''

            }
            signUp.createAccount = function () {
                console.log(signUp.user);
            }

        });
})();

