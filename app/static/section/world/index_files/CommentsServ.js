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
                },
                updateComment: function (articleKey, comment) {
                    var articleCommentUrl = url + 'articles/' + articleKey + '/comments/' + comment.$id;

                    return $q(function (resolve, reject) {
                        var dbComment = $firebaseObject(new Firebase(articleCommentUrl));
                        dbComment.$loaded().then(function () {
                            dbComment.body = comment.body;
                            dbComment.$save().then(function (ref) {
                                resolve(ref.key());
                            })
                        });

                    });
                },
                removeComment: function (articleKey, commentKey) {
                    var commentUrl = url + 'articles/' + articleKey + '/comments/' + commentKey;

                    return $q(function (resolve, reject) {
                        var commentObj = $firebaseObject(new Firebase(commentUrl));
                        commentObj.$loaded().then(function () {

                            commentObj.$remove().then(function (ref) {
                                resolve(ref.key());
                            });
                        });

                    });
                }
            };
        });
})();
