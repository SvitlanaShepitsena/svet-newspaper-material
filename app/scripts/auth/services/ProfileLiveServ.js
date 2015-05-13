(function () {
    'use strict';

    angular.module('auth')
        .factory('ProfileLiveServ', function ($q, url, users, $firebaseObject, $firebaseArray) {

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
