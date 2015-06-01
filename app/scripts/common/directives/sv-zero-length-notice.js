(function () {
    'use strict';

    angular.module('common')
        .directive('svZeroLengthNotice', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-zero-length-notice.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
