(function () {
    'use strict';

    angular.module('events')
        .filter('previosFutureFr', function () {
            return function (list,isFuture) {

                return _.filter(list, function (item) {
                    if (isFuture) {
                    return moment().isBefore(item.startsAt);
                    } else{

                    return moment().isAfter(item.startsAt);
                    }
                });
            };
        });
})();
