(function () {
    'use strict';

    angular.module('home')
        .factory('CurrentUserServ', function ($q, url, urlUsers, $firebaseObject, $firebaseArray) {

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
