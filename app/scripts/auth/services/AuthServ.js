(function () {
    'use strict';

    angular.module('auth')
        .factory('AuthServ', function ($q) {
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
