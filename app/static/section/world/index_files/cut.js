(function () {
    'use strict';

    angular.module('article')
        .filter('cut', function (str) {
            return function (value, max, tail) {
                if (!value) return '';

                max = parseInt(max, 10);
                if (!max) return value;
                if (value.length <= max) return value;

                value=str(value,'')
                value = value.substr(0, max);
                    var lastspace = value.lastIndexOf(' ');
                    if (lastspace != -1) {
                        value = value.substr(0, lastspace);
                    }

                return value + (tail || ' …');
            };
        });
})();
