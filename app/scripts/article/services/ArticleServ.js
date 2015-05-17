(function () {
    'use strict';
    angular.module('article')
        .factory('ArticleServ', function ($q, $firebaseArray, $firebaseObject, url, userAuth, ArticleProcessServ, NewsProcessServ) {
            var ref = new Firebase(url + 'articles/');
            var refArr = $firebaseArray(ref)
            var refObj = $firebaseObject(ref);
            var svetNews;

            function processNews(newsObj) {
                var idCounter = 1;
                var fbKeys = _.filter(_.keys(newsObj), function (key) {
                    return key.indexOf('$') === -1;
                });
                newsObj = _.map(_.filter(newsObj, function (newsOne, index) {
                    if (_.isObject(newsOne)) {
                        return true;
                    }
                }), function (news, count) {
                    return _.extend(news, {
                        id: idCounter++,
                        index: fbKeys[count]
                    });
                });
                var svetNews = {};
                svetNews.newsList = _.toArray(newsObj);
                var newsTrioGrid = NewsProcessServ.get(newsObj);
                svetNews.news = newsTrioGrid.trios;
                svetNews.newsGrid = newsTrioGrid.newsGrid;
                return svetNews;
            }

            return {
                all: function () {
                    return refArr;
                },
                get: function (id) {
                    return $firebaseObject(ref.child(id))
                },
                getDraftObj: function (id) {
                    return $firebaseObject(ref.child(id).child('public'))
                },
                allObjRef: function () {
                    return refObj;
                },
                allForHome: function () {
                    return $q(function (resolve, reject) {
                        var newsObj = refObj;
                        if (svetNews) {
                            resolve(svetNews);
                        }
                        newsObj.$loaded().then(function () {
                            svetNews = processNews(newsObj);
                            resolve(svetNews);
                            newsObj.$watch(function () {
                                svetNews = processNews(newsObj);
                                console.log('change news');
                            });
                        });
                    });
                },
                add: function (article, isPublic) {
                    article.public = isPublic;
                    article.timestamp = moment().format('x');
                    article.authorKey = userAuth.key
                    return $q(function (resolve, reject) {
                        if (article.$id) {
                            var articleDb = ref.child(article.$id);
                            var artFbObj = $firebaseObject(articleDb);
                            artFbObj.$loaded().then(function () {
                                artFbObj = article;
                                artFbObj.$save().then(function (ref) {
                                    artFbObj.fbkey = ref.key();
                                    artFbObj.$save().then(function () {
                                        resolve(ref.key());
                                    })
                                })
                            })
                        } else {
                            refArr.$add(article).then(function (ref) {
                                    var id = ref.key()
                                    var articleDb = ref;
                                    var artFbObj = $firebaseObject(articleDb);
                                    artFbObj.$loaded().then(function () {
                                        artFbObj.fbkey = id;
                                        artFbObj.$save().then(function (ref2) {
                                            resolve();
                                        })
                                    })
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
