(function () {
    'use strict';
    angular.module('article')
        .factory('CommentsServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                saveComment: function (articleKey, comment) {
                    var articleUrl = url + 'articles/' + articleKey + '/comments';

                    return $q(function (resolve, reject) {
                        var articleCommentsArr = $firebaseArray(new Firebase(articleUrl));

                        articleCommentsArr.$add(comment).then(function (uid) {
                            console.log(uid);
                            resolve(uid);
                        });
                    });
                }
            };
        });
})();
