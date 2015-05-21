(function () {
    'use strict';

    angular.module('auth.manager')
        .directive('svManagerBusinessAdList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-manager-business-ad-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
