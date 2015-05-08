(function () {
    'use strict';
    angular.module('article')
        .factory('ArticleServ', function ($q, $firebaseArray, $firebaseObject, url) {
            var ref = new Firebase(url + 'articles/');
            var refArr = $firebaseArray(ref)
            var refObj = $firebaseObject(ref);
            return {
                all: function () {
                    return refArr;
                },
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
