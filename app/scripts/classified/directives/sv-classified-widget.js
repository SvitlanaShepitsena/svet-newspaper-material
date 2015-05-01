(function () {
    'use strict';

    angular.module('classified')
        .directive('svClassifiedWidget', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-classified-widget.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
