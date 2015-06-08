(function () {
    'use strict';

    angular.module('auth.manager')
        .directive('svManagerClassifiedList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-manager-classified-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
