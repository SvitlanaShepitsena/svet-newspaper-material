(function () {
    'use strict';

    angular.module('auth')
        .controller('SvetLoginCtrl', function ($scope) {
            var login = this;

            login.user = {
                email: '',
                pass:''

            }
            login.singIn = function () {
                console.log(login.user);
            }

        });
})();

