(function () {
    'use strict';

    angular.module('sections.home')
        .directive('svMainLoader', function () {
            return {
                replace: true,
                templateUrl: 'scripts/sections/home//directives/sv-main-loader.html'
            };
        });
})();
