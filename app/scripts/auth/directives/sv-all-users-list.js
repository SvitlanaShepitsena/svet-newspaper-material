(function () {
    'use strict';

    angular.module('auth')
        .directive('svAllUsersList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-all-users-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
