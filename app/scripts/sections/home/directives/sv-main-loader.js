(function () {
    'use strict';

    angular.module('sections.home')
        .directive('svMainLoader', function () {
            return {
                replace: true,
                templateUrl: '..//directives/sv-main-loader.html'
            };
        });
})();
