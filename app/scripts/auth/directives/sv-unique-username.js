(function () {
    'use strict';
    angular.module('auth')
        .directive('svUniqueUsername', function ( $q, $timeout, UserUniqueServ) {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {
                    ctrl.$asyncValidators.username = function (modelValue, viewValue) {
                        return UserUniqueServ.isUserNameUnique(modelValue);
                    };
                }
            };
        });
})();
