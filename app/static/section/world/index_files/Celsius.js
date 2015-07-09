(function () {
    'use strict';

    angular.module('sections.widgets')
        .filter('Celsius', function () {
            return function (input, lang) {
                if (lang === 'ru') {
                    return ((input-32)/1.8).toFixed(1);
                }
                    return input;

            };
        });
})();
