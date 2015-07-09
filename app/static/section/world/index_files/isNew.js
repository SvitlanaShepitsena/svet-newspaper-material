(function () {
    'use strict';

    angular.module('ad.classified')
        .filter('isNew', function () {
            return function (ts) {
                var parsed=moment(ts);
                var breakPoint=1;
            };
        });
})();
