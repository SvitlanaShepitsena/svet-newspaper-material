(function () {
    'use strict';
    angular.module('ad.classified')
        .filter('clType', function () {
            return function (list, type) {
                if (type === 'all') {
                    return list;
                }
                return _.filter(list, {section: type});
            };
        });
})();
