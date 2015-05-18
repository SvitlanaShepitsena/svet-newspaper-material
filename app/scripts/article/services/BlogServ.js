(function () {
    'use strict';
    angular.module('article')
        .factory('BlogServ', function ($q, url, users, $firebaseObject, $firebaseArray, lastEditorPost) {
            var ref = new Firebase(url + 'articles');
            var articlesArr = $firebaseArray(ref);

            function setLastBlogBinding(articles) {
                return $q(function (resolve, reject) {

                    var blogs = _.where(articles, {isBlog: true});

                    var lastBlog = _.last(blogs);
                    var lastBlogArticleObj = $firebaseObject(ref.child(lastBlog.$id));
                    lastBlogArticleObj.$loaded(function () {
                        lastEditorPost.post = lastBlogArticleObj;
                        resolve();
                    });
                });
            }

            return {
                setLastBlogLive: function () {
                    return $q(function (resolve, reject) {
                        articlesArr.$loaded(function () {
                            setLastBlogBinding(articlesArr).then(function () {
                                resolve();
                            });
                        });
                    });
                }
            };
        });
})();
