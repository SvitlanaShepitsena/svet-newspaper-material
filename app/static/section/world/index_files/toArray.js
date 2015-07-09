(function () {
    'use strict';
    angular.module('auth.notifications')
        .filter('toArray', function () {
            return function (obj) {
                var finalArr = [];
                _.forOwnRight(obj, function (value, key) {
                    if (value.timestamp) {
                        value.$id = key;
                        finalArr.push(value);
                    }
                })
                return finalArr;
            };
        });
})();
