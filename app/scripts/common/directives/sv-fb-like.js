(function () {
    'use strict';

    angular.module('common')
        .directive('svFbLike', function () {
            return {
                replace: true,
                templateUrl: 'scripts/common/directives/sv-fb-like.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
