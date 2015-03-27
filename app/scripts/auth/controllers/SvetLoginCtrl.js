(function () {
    'use strict';

    angular.module('auth')
        .controller('SvetLoginCtrl', function ($scope) {
            var svetLogin = this;

            svetLogin.user = {
                email: '',
                pass:''

            }

        });
})();

