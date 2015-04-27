(function () {
    'use strict';

    angular.module('events')
        .filter('eventsInvitation', function ($rootScope) {
            return function (events, index) {
                if (!events || events.length === 0) {
                    return;
                }
                var finalList = [];
                var u = $rootScope.user;

                if (index == 0) {
                    for (var i = 0; i < events.length; i++) {
                        var event = events[i];
                        var customers = _.pluck(event.customers, 'id');
                        if (customers.indexOf(u.id) > -1) {
                            finalList.push(event);
                        }
                    }
                }

                if (index == 2) {

                    for (var i = 0; i < events.length; i++) {
                        var event = events[i];
                        var customers = _.pluck(event.customers, 'id');

                        if (customers.indexOf(u.id) === -1) {
                            finalList.push(event);
                        }
                    }
                }
                return finalList;
            };
        });
})();
