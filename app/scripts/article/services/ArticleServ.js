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
                get: function (id) {
                    return $firebaseObject(ref.child(id))
                },
                allObjRef: function () {
                    return refObj;
                },
                add: function (article) {
                    return $q(function (resolve, reject) {
                        if (article.$id) {
                            var articleDb = ref.child(article.$id);
                            var artFbObj = $firebaseObject(articleDb);
                            artFbObj.$loaded().then(function () {
                                artFbObj = article;
                                artFbObj.$save().then(function (ref) {
                                    resolve(ref.key());
                                })
                            })
                        } else {
                            refArr.$add(article).then(function (uid) {
                                    resolve(uid);
                                },
                                function (error) {
                                    reject(error);
                                }
                            );
                        }
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
