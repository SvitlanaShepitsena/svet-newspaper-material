(function () {
    'use strict';

    angular.module('events')
        .filter('eventStatus', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
