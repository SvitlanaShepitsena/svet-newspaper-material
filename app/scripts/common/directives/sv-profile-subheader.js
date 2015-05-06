(function () {
    'use strict';
    angular.module('common')
        .directive('svProfileSubheader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-profile-subheader.html',
                scope: {
                    subheadTitle: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
