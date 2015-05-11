(function () {
    'use strict';

    angular.module('common')
        .directive('svStarRating', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-star-rating.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
