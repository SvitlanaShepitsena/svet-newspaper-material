(function () {
    'use strict';

    angular.module('notifications')
        .directive('svDropAlign', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
