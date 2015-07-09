(function () {
    'use strict';

    angular.module('article')
        .filter('authorNameFr', function () {
            return function (userName) {
                if (!userName || !_.isString(userName)) {
                    return;
                }
                return (_.map(userName.split('-'), function (initial) {
                    return _.capitalize(initial);
                })).join(' ');

            };
        });
})();
