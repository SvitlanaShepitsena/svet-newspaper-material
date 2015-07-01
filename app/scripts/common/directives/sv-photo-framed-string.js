(function () {
    'use strict';

    angular.module('common')
        .directive('svPhotoFramedString', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-photo-framed-string.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
