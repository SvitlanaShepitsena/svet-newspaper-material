(function () {
    'use strict';

    angular.module('auth.manager')
        .directive('svBusinessAdManagerList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/manager/directives/sv-business-ad-manager-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
