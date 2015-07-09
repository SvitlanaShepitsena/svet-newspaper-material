(function () {
    'use strict';
    angular.module('common')
        .directive('svProfileSubhead', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-profile-subhead.html',
                scope: {
                    subheadTitle: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
