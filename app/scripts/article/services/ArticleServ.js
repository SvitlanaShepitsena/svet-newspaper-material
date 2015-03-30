(function () {
    'use strict';

    angular.module('article')
        .factory('ArticleServ', function ($q) {
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
