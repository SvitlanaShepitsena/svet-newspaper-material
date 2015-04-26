(function () {
    'use strict';

    angular.module('events')
        .filter('eventsInvitation', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
