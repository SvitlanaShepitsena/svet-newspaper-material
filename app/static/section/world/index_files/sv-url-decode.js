(function () {
    'use strict';
    angular.module('article')
        .directive('svUrlDecode', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {
                    ctrl.$formatters.push(function (modelValue) {
                        if (!modelValue) {
                            return;
                        }
                        return modelValue.replace(/&#34;/g, '"');
                    })
                }
            };
        });
})();
