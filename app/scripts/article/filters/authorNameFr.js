(function () {
    'use strict';

    angular.module('article')
        .filter('authorNameFr', function () {
                return function (userName) {
                    return (_.map(userName.split('-'), function (initial) {
                        return _.capitalize(initial);
                    })).join(' ');

                };
        });
})();
