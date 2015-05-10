(function () {
    'use strict';

    angular.module('common')
        .directive('svLxButton', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-lx-button.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
