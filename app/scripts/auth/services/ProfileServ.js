(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileServ', function (DbServ, $q, url, users, $firebaseObject, $firebaseArray) {
            return {
                getProfile: function (authData) {
                    return $q(function (resolve, reject) {
                        DbServ.findProfile(authData).then(function (dbProfile) {

                        });
                    });
                }
            };
        });
})();
