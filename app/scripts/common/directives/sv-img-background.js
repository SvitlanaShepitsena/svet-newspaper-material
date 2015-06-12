(function () {
    'use strict';

    angular.module('common')
        .directive('svImgBackground', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-img-background.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
