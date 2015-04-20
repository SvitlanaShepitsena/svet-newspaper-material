(function () {
    'use strict';

    angular.module('classified')
        .directive('svAddClassifiedBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-add-classified-btn.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
