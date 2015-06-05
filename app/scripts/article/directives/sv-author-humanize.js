(function () {
    'use strict';

    angular.module('article')
        .directive('svAuthorHumanize', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
