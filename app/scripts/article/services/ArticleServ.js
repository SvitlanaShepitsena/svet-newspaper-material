(function () {
    'use strict';

    angular.module('article')
        .factory('ArticleServ', function ($q, $firebaseArray, $firebaseObject, url) {

            var refArr = $firebaseArray(new Firebase(url + 'articles/'));
            var refObj = $firebaseObject(new Firebase(url + 'articles/'));


            return {
                allObjRef: function () {
                    return refObj;
                },
                add: function (article) {
                    return $q(function (resolve, reject) {
                        refArr.$add(article).then(function (uid) {
                                resolve(uid);
                            },
                            function (error) {
                                reject(error);
                            }
                        );

                    });
                },
                addComment: function (fbKey, comment) {
                    return $q(function (resolve, reject) {
                        var refCommArr = $firebaseArray(new Firebase(url + 'articles/' + fbKey + '/comments'));
                        refCommArr.$add(comment).then(
                            function (uid) {
                                resolve(uid);
                            }
                        )

                    });
                }
            };
        });
})();
