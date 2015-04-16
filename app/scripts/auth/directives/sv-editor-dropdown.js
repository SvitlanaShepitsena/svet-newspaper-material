(function () {
    'use strict';

    angular.module('auth')
        .directive('svEditorDropdown', function () {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-editor-dropdown.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
