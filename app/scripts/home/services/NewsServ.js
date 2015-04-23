(function () {
    'use strict';

    angular.module('home')
        .factory('NewsServ', function ($q, url) {
            return {
                getSync: function () {

                },
                get: function () {
                    return $q(function (resolve, reject) {

                    });
                }
            };
        });
})();
