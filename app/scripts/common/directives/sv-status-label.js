(function () {
    'use strict';

    angular.module('common')
        .directive('svStatusLabel', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-status-label.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
