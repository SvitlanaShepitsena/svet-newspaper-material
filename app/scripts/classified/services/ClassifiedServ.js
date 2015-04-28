(function () {
    'use strict';

    angular.module('classified')
        .factory('ClassifiedServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var freeClNumber = 0;

            return {

                getUserClassifiesArr: function (id) {
                    var classifiedUrl = users + id + '/classified/';
                    var classifiedArray = $firebaseArray(new Firebase(classifiedUrl));

                    return classifiedArray;

                },
                isClAvaliable: function (exists) {
                    return (exists - freeClNumber) > 0;
                },
                howManyAllowed: function (exists) {
                    var left = exists - freeClNumber;
                    return left < 0 ? 0 : left;
                }
            };
        });
})();
