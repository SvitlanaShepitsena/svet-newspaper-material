(function () {
    'use strict';

    angular.module('oommon')
        .directive('svImgBackground', function () {
            return {
                replace: true,
                templateUrl: 'scripts/oommon/directives/sv-img-background.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
