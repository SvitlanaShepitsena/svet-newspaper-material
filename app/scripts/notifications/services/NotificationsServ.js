(function () {
    'use strict';

    angular.module('notifications')
        .factory('NotificationsServ', function ($q, url, urlUsers, $firebaseObject, $firebaseArray) {

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
