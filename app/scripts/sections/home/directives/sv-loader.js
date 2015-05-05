(function () {
    'use strict';

    angular.module('sections.home')
        .directive('svLoader', function () {
            return {
                templateUrl: 'scripts/sections/home/directives/sv-loader.html'
            };
        });
})();
