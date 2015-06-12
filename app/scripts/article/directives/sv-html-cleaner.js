(function () {
    'use strict';

    angular.module('article')
        .directive('svHtmlCleaner', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
