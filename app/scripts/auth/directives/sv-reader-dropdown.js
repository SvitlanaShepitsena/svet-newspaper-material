(function () {
    'use strict';

    angular.module('auth')
        .directive('svReaderDropdown', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-reader-dropdown.html',
                scope: {
                    user: '=',
                    logout:'&'

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
