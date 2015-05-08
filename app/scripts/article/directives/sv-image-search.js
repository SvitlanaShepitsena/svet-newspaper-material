(function () {
    'use strict';

    angular.module('article')
        .directive('svImageSearch', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-image-search.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
