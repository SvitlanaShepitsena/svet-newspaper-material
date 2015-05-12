(function () {
    'use strict';

    angular.module('auth')
        .factory('ProfileServ', function ($q, url, users, $firebaseObject, $firebaseArray) {

            return {

                getProfile: function (authData) {
                    return $q(function (resolve, reject) {



                    });
                }
            };
        });
})();
