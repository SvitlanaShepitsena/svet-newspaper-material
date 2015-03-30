(function () {
    'use strict';

    angular.module('article')
        .factory('ArticleServ', function ($q, $firebaseArray, url) {

            var ref = $firebaseArray(new Firebase(url + 'articles/'));


            return {
                getSync: function () {

                },
                add: function (article) {
                    return $q(function (resolve, reject) {
                        ref.$add(article).then(function (uid) {
                            resolve(uid);
                        },
                            function (error) {
                                reject(error);
                            }
                        );

                    });
                }
            };
        });
})();
