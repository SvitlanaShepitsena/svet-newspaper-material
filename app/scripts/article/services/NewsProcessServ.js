(function () {
    'use strict';

    angular.module('article')
        .factory('NewsProcessServ', function () {
            return {
                get: function (newsObj) {
                    return newsObj;

                }
            };
        });
})();
