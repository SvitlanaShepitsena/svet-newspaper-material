(function () {
    'use strict';

    angular.module('auth')
        .controller('SignUpCtrl', function ($scope) {
            var signUp = this;


            signUp.user = {
                email: '',
                pass:''

            }
            signUp.createAccount = function () {
                console.log(signUp.user);
            }

        });
})();

