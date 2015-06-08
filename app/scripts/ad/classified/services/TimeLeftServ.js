(function () {
    'use strict';
    angular.module('ad.classified')
        .factory('TimeLeftServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                computeInDays: function (timestamp, days) {
                    var timeLeft = moment(timestamp).add(days, 'days').fromNow();
                    return timeLeft;
                }
            };
        });
})();
