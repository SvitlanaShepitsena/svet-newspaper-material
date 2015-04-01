(function () {
    'use strict';

    angular.module('article')
        .factory('NewsProcessServ', function () {
            return {
                get: function (newsObj) {
                    var topNewsTrio = [];
                    var topNews = [];
                    var secondNews = [];

                    _.forIn(newsObj, function (value, key) {
                        if (_.isObject(value)) {
                            if (value.isTopNews) {
                                topNews.push(value);
                            }
                            if (!value.isTopNews) {
                                secondNews.push(value);
                            }
                        }
                    });
                    console.log(topNews.length);
                    console.log(secondNews.length);
                    for (var i = 0; i < topNews.length; i++) {
                        var top = topNews[i];
                        var topTrioEl
                    }

                    return newsObj;

                }
            };
        });
})();
