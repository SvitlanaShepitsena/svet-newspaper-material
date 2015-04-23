(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserPersonalInfo', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-personal-info.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
