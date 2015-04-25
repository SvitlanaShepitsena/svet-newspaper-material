(function () {
    'use strict';

    angular.module('ad')
        .factory('AdTypesServ', function ($q, url) {
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
