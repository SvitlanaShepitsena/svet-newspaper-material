(function () {
    'use strict';

    angular.module('classified')
        .directive('svUserClassified', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-user-classified.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
