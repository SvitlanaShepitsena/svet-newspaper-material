(function () {
    'use strict';

    angular.module('events')
        .filter('EventsType', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
