(function () {
    'use strict';

    angular.module('common')
        .directive('svImageThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-image-thumb.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
