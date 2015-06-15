(function () {
    'use strict';

    angular.module('common')
        .directive('svPhotogallery', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-photogallery.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
