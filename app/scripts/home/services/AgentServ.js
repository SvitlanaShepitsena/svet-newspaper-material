(function () {
    'use strict';

    angular.module('home')
        .factory('AgentServ', function ($q, url) {
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
