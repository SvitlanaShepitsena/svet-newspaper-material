(function () {
    'use strict';
    angular.module('sections.home')
        .factory('NewsServ', function ($q, url, $firebaseArray) {
            var refArr = $firebaseArray(new Firebase(url + 'articles/'));
            return {
                getSync: function () {
                },
                get: function () {
                    return $q(function (resolve, reject) {
                    });
                }
            };
        });
})();
