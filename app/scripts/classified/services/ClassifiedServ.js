(function () {
    'use strict';

    angular.module('classified')
        .factory('ClassifiedServ', function ($q, url, urlUsers, $firebaseObject, $firebaseArray) {

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
