(function () {
    'use strict';

    angular.module('auth')
        .directive('svReaderDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-reader-dropdown.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
