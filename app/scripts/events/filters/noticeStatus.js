(function () {
    'use strict';

    angular.module('events')
        .filter('noticeStatus', function () {
            return function (input) {
                return 'test filter: ' + input;
            };
        });
})();
