(function () {
    'use strict';

    angular.module('home')
        .factory('ImageSizeServ', function ($q) {
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
