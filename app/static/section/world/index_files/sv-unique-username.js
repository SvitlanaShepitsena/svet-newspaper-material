(function () {
    'use strict';
    angular.module('auth')
        .directive('svUniqueUsername', function ($q, $timeout, UserUniqueServ) {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {
                    ctrl.$asyncValidators.svUniqueUsername = function (modelValue, viewValue) {
                        modelValue= modelValue.trim().replace(/\s+/g,'-').toLowerCase();
                        if (modelValue=== $scope.oldUserName) {
                            return $q.when(true);
                        } else{

                        return UserUniqueServ.isUserNameUnique(modelValue);
                        }
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
