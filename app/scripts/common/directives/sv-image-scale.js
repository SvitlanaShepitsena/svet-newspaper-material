(function () {
    'use strict';

    angular.module('common')
        .directive('svImageScale', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
