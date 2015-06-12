(function () {
    'use strict';
    angular.module('sections.radio')
        .factory('RadioServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
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
