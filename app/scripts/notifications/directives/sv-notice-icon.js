(function () {
    'use strict';

    angular.module('notifications')
        .directive('svNoticeIcon', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                }
            };
        });
})();
