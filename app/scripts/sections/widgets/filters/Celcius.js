(function () {
    'use strict';

    angular.module('widgets')
        .filter('Celcius', function () {
            return function (input, lang) {
                if (lang === 'ru') {
                    return ((input-32)/1.8).toFixed(1);
                }
                    return input;

            };
        });
})();
