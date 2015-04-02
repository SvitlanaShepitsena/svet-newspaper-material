(function () {
    'use strict';

    angular.module('home')
        .factory('ColorStateServ', function ($q, url) {
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
