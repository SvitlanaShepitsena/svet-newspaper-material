(function () {
    'use strict';

    angular.module('events')
        .filter('eventsType', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
