(function () {
    'use strict';
    angular.module('common')
        .factory('NewsGeneratorServ', function (SvobodaSaveToDbServ, HtmlParseServ, $http, $q, $rootScope, $firebaseArray, url) {
            var gUrl = 'http://api.feedzilla.com/v1/categories.json';
            var svobodaUrls = ['epiqq']
            var allCategories = [];
            var avoidCategories = ['игорем', 'померанцев'];
            var avoidNewsWithTitle = ['стрелков'];

            function isInAvoid(tag) {
                for (var i = 0; i < avoidCategories.length; i++) {
                    var avoid = avoidCategories[i];
                    if (tag.indexOf(avoid) > -1) {
                        return true;
                    }
                }
                return false;
            }

            function getUniqueCategories(news) {
                var categories = [];
                var categNumb = [];
                news.forEach(function (n) {
                    var indCateg = n.sections;
                    indCateg.forEach(function (nin) {
                        if (!isInAvoid(nin)) {
                            if (nin.length > 0) {
                                var index = categories.indexOf(nin);
                                if (index === -1) {
                                    categories.push(nin);
                                    categNumb.push(1);
                                } else {
                                    categNumb[index]++;
                                }
                            }
                        }
                    })
                })
                //console.log(categories);
                //console.log(categNumb);
                _.zip(categories, categNumb).forEach(function (tag) {
                    allCategories.push({name: tag[0], numb: tag[1]});
                });
                allCategories = _.sortBy(allCategories, function (tag2) {
                    return -tag2.numb;
                });
                $rootScope.allCateg = allCategories;
                return allCategories;
            }

            function classify(news) {
                news.forEach(function (n) {
                    n.sections = [];
                    var indCateg = n.categories;
                    indCateg.forEach(function (nin) {
                        nin = nin.replace('Новости - ', '');
                        nin = nin.replace('Новости', '').toLowerCase();
                        if (nin.length > 0) {
                            n.sections.push(nin);
                        }
                    })
                    n.categories = null;
                })
                return news;
            }

            return {
                getCategories: function (limit) {
                    if (limit) {
                        return _.first(allCategories, limit);
                    }
                    return allCategories;
                },
                getPoliticalNews: function (number, shuffle) {
                    number = number || 2;
                    //shuffle = shuffle || true;
                    var deferred = $q.defer();
                    var urlCom = 'http://www.svoboda.org/api/';
                    var promises = [];
                    var allNewsArr = [];
                    for (var i = 0; i < svobodaUrls.length; i++) {
                        var urlEnd = svobodaUrls[i];
                        var url = urlCom + urlEnd;
                        promises.push(this.getPoliticalNewsWithImages(url).then(function (value) {
                            allNewsArr.push(value);
                        }));
                    }
                    $q.all(promises).then(function () {

                        deferred.resolve(allNewsArr[0]);
                    });
                    return deferred.promise;
                },
                getGenerateNewsWithImages: function (number, shuffle) {
                    var deferred = $q.defer();
                    var urlCom = 'http://www.svoboda.org/api/';
                    var promises = [];
                    var allNewsArr = [];
                    for (var i = 0; i < svobodaUrls.length; i++) {
                        var urlEnd = svobodaUrls[i];
                        var url = urlCom + urlEnd;
                        promises.push(this.getNewsWithImages(url).then(function (value) {
                            allNewsArr.push(value);
                        }));
                    }
                    $q.all(promises).then(function () {
                        var uniqueNews = [];
                        var uniqueImgs = [];

                        deferred.resolve(allNewsArr[0]);
                    });
                    return deferred.promise;
                },
                getNewsWithImages: function (url, number, shuffle) {
                    var deferred = $q.defer();
                    var result = $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json_xml&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));

                    function parseXml(xml) {
                        var start = 0;
                        var end = 0;
                        var imgs = [];
                        while (true) {
                            start = xml.indexOf('enclosure', start);
                            if (start === -1) {
                                break;
                            }
                            start = xml.indexOf('http', start);
                            end = xml.indexOf('"', start);
                            var img = xml.substring(start, end);
                            imgs.push(img);
                            start = end;
                        }
                        return imgs;
                    }

                    function joinNewsImages(news, imgs) {
                        for (var i = 0; i < news.length; i++) {
                            var n = news[i];
                            var img = imgs[i];
                            n.img = img;
                        }
                        return news;
                    }

                    result.then(function (data) {
                        var finalNews;
                        var xml = data.data.responseData.xmlString;
                        var imgs = parseXml(xml);
                        var news = (data.data.responseData.feed.entries);
                        news = joinNewsImages(news, imgs);
                        HtmlParseServ.getMultipleFullNews(news).then(function (fullNews) {
                            for (var i = 0; i < news.length; i++) {
                                var singleNews = news[i];
                                var fullNewsBody = fullNews[i].body;
                                var fullNewsTags = fullNews[i].tags;
                                singleNews.body = fullNewsBody;
                                singleNews.tags = fullNewsTags;
                            }
                            SvobodaSaveToDbServ.cleanSvoboda().then(function () {
                                SvobodaSaveToDbServ.saveAll(news).then(function () {
                                    deferred.resolve();
                                })
                            })
                        })
                    }).catch(function (e) {
                        deferred.reject('Error in rss request. Due to: ' + e);
                    });
                    return deferred.promise;
                },
                getPoliticalNewsWithImages: function (url, number, shuffle) {
                    var deferred = $q.defer();
                    var result = $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json_xml&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));

                    function parseXml(xml) {
                        var start = 0;
                        var end = 0;
                        var imgs = [];
                        while (true) {
                            start = xml.indexOf('enclosure', start);
                            if (start === -1) {
                                break;
                            }
                            start = xml.indexOf('http', start);
                            end = xml.indexOf('"', start);
                            var img = xml.substring(start, end);
                            imgs.push(img);
                            start = end;
                        }
                        return imgs;
                    }

                    function joinNewsImages(news, imgs) {
                        for (var i = 0; i < news.length; i++) {
                            var n = news[i];
                            var img = imgs[i];
                            n.img = img;
                        }
                        return news;
                    }

                    result.then(function (data) {
                        var finalNews;
                        var xml = data.data.responseData.xmlString;
                        var imgs = parseXml(xml);
                        var news = (data.data.responseData.feed.entries);
                        news = joinNewsImages(news, imgs);
                        var randomNews = _.shuffle(news)[0];
                        HtmlParseServ.getFullNews(randomNews.link).then(function (fullNews) {
                            randomNews.body = fullNews.body;
                            randomNews.tags = fullNews.tags;
                            deferred.resolve(randomNews);
                        });
                    }).catch(function (e) {
                        deferred.reject('Error in rss request. Due to: ' + e);
                    });
                    return deferred.promise;
                }
            };
        });
})
();
