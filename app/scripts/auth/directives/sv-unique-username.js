(function () {
    'use strict';
    angular.module('auth')
        .directive('svUniqueUsername', function ($q, $timeout, UserUniqueServ) {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {
                    ctrl.$asyncValidators.username = function (modelValue, viewValue) {
                        modelValue= modelValue.replace(/\s+/g,'-').toLowerCase();
                        return UserUniqueServ.isUserNameUnique(modelValue);
                    };
                    ctrl.$formatters.push(function (modelValue) {
                        return modelValue.replace(/\s+/g,'-').toLowerCase();
                    });
                    ctrl.$parsers.push(function (modelValue) {
                        return modelValue.replace(/\s+/g,'-').toLowerCase();
                    });

                }
            };
        });
})();
