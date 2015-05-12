(function () {
    'use strict';
    angular.module('auth')
        .factory('DbServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                findProfile: function (authData) {
                    return $q(function (resolve, reject) {

                    });
                }
            };
        });
})();
