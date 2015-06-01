(function () {
    'use strict';

    angular.module('common')
        .directive('svConfirmDeletion', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
