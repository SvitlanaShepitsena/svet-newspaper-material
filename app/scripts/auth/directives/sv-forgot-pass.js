(function () {
    'use strict';

    angular.module('auth')
        .directive('svForgotPass', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-forgot-pass.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                    console.log('run here sv-forgot-pass.js');
                }
            };
        });
})();
