(function () {
    'use strict';
    angular.module('ad.classified')
        .factory('TimeLeftServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                computeInDays: function (timestamp, days) {
                    var timeWeekAfter = moment(timestamp, 'x').add(days, 'days');
                    //var timeLeft = moment(timestamp,'x').add(days, 'days').fromNow();
                    var isActive = timeWeekAfter.isAfter();
                    return {isActive: isActive, timeLeft: timeWeekAfter.fromNow()}
                },
                isNew: function (timestamp, hours) {
                    var hours = moment(timestamp, 'x').add(hours, 'hours');
                    //var timeLeft = moment(timestamp,'x').add(days, 'days').fromNow();
                    return hours.isAfter();
                },

            };
        });
})();