(function () {
    'use strict';
    angular.module('ad.classified')
        .filter('isNewCl', function () {
            return function (ts) {
                if (!ts) {
                    return;
                }
                var now = parseInt(moment().format('x'));
                var parsed = parseInt(ts);
                var format = (now - parsed) / (6600);
                if (format < 24) {
                    return 'New!'
                }
            };
        });
})();
