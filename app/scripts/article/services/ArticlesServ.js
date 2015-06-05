(function () {
    'use strict';
    angular.module('article')
        .factory('ArticlesServ', function (NewsTimeSelectorServ, svetNews, $q, url, users, $firebaseObject, $firebaseArray, userAuth) {
            var ref = new Firebase(url + 'articles');
            var articlesArr = $firebaseArray(ref);

            function setPublicNewsLive(articles) {
                var freshArticles = NewsTimeSelectorServ.select(articles);
                var publicNews = _.where(freshArticles, {isPublic: true, isBlog: false});
                svetNews.public = _.sortBy(publicNews, 'newsOrder');
            }

            function setImgProp(article) {
                var wart = $('<div></div>').append(article.body);
                var imgs = wart.find('img');
                if (imgs.length > 0) {
                    var mainImage = imgs[0];
                    article.img = mainImage.src;
                }
                return article
            }

            function getNextNewsOrder() {
                return $q(function (resolve, reject) {
                    articlesArr.$loaded(function () {
                        if (articlesArr.length === 0) {
                            resolve(1)
                        }
                        var freshArticles = NewsTimeSelectorServ.select(articlesArr);
                        var publicNews = _.where(freshArticles, {isPublic: true, isBlog: false});
                        if (publicNews.length === 0) {
                            resolve(1);
                        } else {
                            var order = _.pluck(publicNews, 'newsOrder');
                            var max = _.max(order);
                            resolve(max + 1);
                        }
                        resolve(publicNews);
                    })
                });
            }

            return {
                setHomeNewsLive: function () {
                    return $q(function (resolve, reject) {
                        articlesArr.$loaded(function () {
                            setPublicNewsLive(articlesArr);
                            articlesArr.$watch(function () {
                                setPublicNewsLive(articlesArr);
                            });
                            resolve();
                        })
                    });
                },
                all: function () {
                    return articlesArr;
                },
                allPublic: function () {
                    return $q(function (resolve, reject) {
                        articlesArr.$loaded().then(function () {
                            var articlesPub = _.filter(articlesArr, function (article) {
                                return article.isPublic;
                            });
                            resolve(articlesPub);
                        });
                    });
                },
                get: function (id) {
                    return $firebaseObject(ref.child(id))
                },
                remove: function (id) {
                    return $q(function (resolve, reject) {
                        $firebaseObject(ref.child(id)).$remove().then(function () {
                            resolve();
                        });
                    });
                },
                getStatus: function (key, property) {
                    return $q(function (resolve, reject) {
                        var status = $firebaseObject(ref.child(key).child(property));
                        status.$loaded().then(function () {
                            resolve(status.$value);
                        })
                    });
                },
                allObjRef: function () {
                    return refObj;
                },
                changeRank: function (articles) {
                    return $q(function (resolve, reject) {
                        articlesArr.$loaded().then(function () {
                            for (var i = 0; i < articles.length; i++) {
                                var article = articles[i];
                                var articleDb = _.find(articlesArr, {$id: article.$id});
                                articleDb.newsOrder = i + 1;
                                articlesArr.$save(articleDb);
                            }
                            resolve();
                        })
                    });
                },
                computeNewsOrder: function (key) {
                    return $q(function (resolve, reject) {
                        var articleObj = $firebaseObject(ref.child(key));
                        articleObj.$loaded(function () {
                            if (articleObj.isPublic) {
                                articleObj.isPublic = false;
                                articleObj.$save().then(function () {
                                    var newOrderObj = $firebaseObject(articleObj.$ref().child('newsOrder'));
                                    newOrderObj.$remove().then(function () {
                                        resolve()
                                    });
                                })
                            } else {
                                getNextNewsOrder().then(function (nextNewsOrder) {
                                    articleObj.newsOrder = nextNewsOrder;
                                    articleObj.isPublic = true;
                                    articleObj.$save().then(function () {
                                        resolve();
                                    });
                                });
                            }
                        })
                    });
                },
                add: function (article, isPublic) {
                    article.isPublic = article.isPublic || isPublic;
                    article.timestamp = moment().format('x');
                    article.authorKey = userAuth.key;
                    article = setImgProp(article);
                    article.author = article.author;
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
                            //getNextNewsOrder().then(function (nextNewsOrder) {
                            //    article.newsOrder = nextNewsOrder;
                            articlesArr.$add(article).then(function (ref) {
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
                            //})
                        }
                    });
                }
            };
        });
})();
