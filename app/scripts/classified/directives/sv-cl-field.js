(function () {
    'use strict';

    angular.module('classified')
        .directive('svClField', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-cl-field.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
