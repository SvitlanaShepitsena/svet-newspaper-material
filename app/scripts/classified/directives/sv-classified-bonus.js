(function () {
    'use strict';

    angular.module('classified')
        .directive('svClassifiedBonus', function () {
            return {
                replace: true,
                templateUrl: 'scripts/classified/directives/sv-classified-bonus.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
