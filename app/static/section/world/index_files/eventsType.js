(function () {
    'use strict';

    angular.module('events')
        .filter('eventsType', function () {
            return function (events, type) {
                if (!type || type === 'all' || events.length === 0) {
                    return events;
                }

                var filteredEvents = _.filter(events, {type: type});

                return filteredEvents;
            };
        });
})();
