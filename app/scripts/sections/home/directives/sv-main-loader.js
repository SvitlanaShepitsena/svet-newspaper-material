(function () {
    'use strict';

    angular.module('home')
        .directive('svMainLoader', function () {
            return {
                replace: true,
                templateUrl: '..//directives/sv-main-loader.html'
            };
        });
})();
