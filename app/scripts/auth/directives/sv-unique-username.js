(function () {
    'use strict';
    angular.module('auth')
        .directive('svUniqueUsername', function ( $q, $timeout) {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {
                    ctrl.$asyncValidators.username = function (modelValue, viewValue) {
                        return UserServ.isUserNameUnique(modelValue);
                    };
                }
            };
        });
})();
