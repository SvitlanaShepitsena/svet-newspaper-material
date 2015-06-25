(function () {
    'use strict';

    angular.module('common')
        .directive('svModalWindowSizeMedia', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-modal-window-size-media.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
