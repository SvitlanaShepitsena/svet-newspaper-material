(function () {
    'use strict';

    angular.module('auth')
        .controller('SvetLoginCtrl', function ($scope, AuthServ, $rootScope, $state) {
            var login = this;

            login.user = {
                email: 'user@gmail.com',
                password: '12345'
            }

            login.singIn = function () {
                AuthServ.loginPassword(login.user.email, login.user.password).then(function (user) {
                    $rootScope.user = user;
                    $state.go('app.svet-profile.author-dashboard');

                })
            }
        });
})();

