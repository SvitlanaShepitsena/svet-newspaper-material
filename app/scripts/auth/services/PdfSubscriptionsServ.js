(function () {
    'use strict';

    angular.module('auth')
        .factory('PdfSubscriptionsServ', function ($q, url) {
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
