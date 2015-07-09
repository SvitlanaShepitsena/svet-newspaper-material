(function () {
    'use strict';

    angular.module('events')
        .filter('eventsInvitation', function (userAuth) {
            return function (events, index) {
                if (!events || events.length === 0 || !userAuth.profile) {
                    return;
                }
                var finalList = [];
                var userName = userAuth.profile.userName;

                if (index == 0) {
                    for (var i = 0; i < events.length; i++) {
                        var event = events[i];
                        var customers = _.pluck(event.customers, 'userName');
                        if (customers.indexOf(userName) > -1) {
                            finalList.push(event);
                        }
                    }
                }

                if (index == 2) {

                    for (var i = 0; i < events.length; i++) {
                        var event = events[i];
                        var customers = _.pluck(event.customers, 'userName');

                        if (customers.indexOf(userName) === -1) {
                            finalList.push(event);
                        }
                    }
                }
                return finalList;
            };
        });
})();
