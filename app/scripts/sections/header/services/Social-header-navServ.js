(function () {
    'use strict';
    angular.module('sections.header')
        .factory('Social-header-navServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
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
