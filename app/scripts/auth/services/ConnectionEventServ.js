(function () {
    'use strict';

    angular.module('auth')
        .factory('ConnectionEventServ', function ($q, url) {
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
