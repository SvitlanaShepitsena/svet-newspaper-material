(function () {
    'use strict';

    angular.module('auth')
        .directive('svAuthorDropdown', function () {
            return {
                templateUrl: 'scripts/auth/directives/sv-author-dropdown.html',
                scope: {
                    user: '=',
                    logout:'&'

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
