(function () {
    'use strict';

    angular.module('home')
        .factory('UserServ', function ($q, url, urlUsers, $firebaseObject, $firebaseArray) {

            return {

                get: function () {

                },

                getAssync: function () {
                    return $q(function (resolve, reject) {

                    });
                }
            };
        });
})();
