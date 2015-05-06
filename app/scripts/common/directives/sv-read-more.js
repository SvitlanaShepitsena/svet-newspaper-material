(function () {
    'use strict';
    angular.module('common')
        .directive('svReadMore', function () {
            return {
                replace: true,
                templateUrl: 'sv-read-more.html',
                scope: {
                    readMore: '@'
                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
