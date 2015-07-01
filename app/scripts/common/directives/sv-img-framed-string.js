(function () {
    'use strict';

    angular.module('common')
        .directive('svImgFramedString', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-img-framed-string.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
