(function () {
    'use strict';
    angular.module('article')
        .factory('ArticleProcessServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
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
