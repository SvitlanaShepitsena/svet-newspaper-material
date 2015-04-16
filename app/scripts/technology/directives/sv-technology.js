(function () {
    'use strict';

    angular.module('technology')
        .directive('svTechnology', function () {
            return {
                replace: true,
                templateUrl: 'scripts/technology/directives/sv-technology.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
