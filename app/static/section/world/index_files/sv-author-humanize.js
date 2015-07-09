(function () {
    'use strict';

    angular.module('article')
        .directive('svAuthorHumanize', function () {
            return {
                require: '?^ngModel',
                link: function ($scope, el, attrs, ctrl) {

                    ctrl.$formatters.push(function (modelValue) {
                        if (!modelValue) {
                            return;
                        }

                        var hum = (_.map(modelValue.split('-'), function (initial) {
                            return _.capitalize(initial);
                        })).join(' ');
                        return hum;
                    });
                }
            };
        });
})();
