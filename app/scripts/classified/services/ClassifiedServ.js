(function () {
    'use strict';

    angular.module('classified')
        .factory('ClassifiedServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var freeClNumber = 1;

            return {

                getUserClassifiesArr: function (id) {
                    var classifiedUrl = users + id + '/classified/';
                    var classifiedArray = $firebaseArray(new Firebase(classifiedUrl));

                    return classifiedArray;

                },
                isClAvaliable: function (exists) {
                    if (!exists) {
                        return o;
                    }
                    var len = exists.length;
                    return (freeClNumber - len) > 0;
                },
                howManyAllowed: function (exists) {
                    if (!exists) {
                        return 0;
                    }

                    var len = exists.length;
                    var left = freeClNumber - len;
                    return left < 0 ? 0 : left;
                }
            };
        });
})();
