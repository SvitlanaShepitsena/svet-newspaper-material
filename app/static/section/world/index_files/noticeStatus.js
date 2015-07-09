(function () {
    'use strict';

    angular.module('events')
        .filter('noticeStatus', function () {
            return function (notices,opened) {
                if (!notices) {
                    return;
                }
                return _.where(notices,{opened:opened});
            };
        });
})();
