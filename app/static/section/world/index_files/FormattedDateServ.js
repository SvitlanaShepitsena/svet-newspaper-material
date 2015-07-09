(function () {
    'use strict';
    angular.module('common')
        .factory('FormattedDateServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                get: function () {
                },
                getFormattedDate: function () {
                    var today = new Date();
                    return (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
                }
            };
        });
})();
