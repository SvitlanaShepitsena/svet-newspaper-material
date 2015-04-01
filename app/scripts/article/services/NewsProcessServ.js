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
                    for (var i = 0; i < topNews.length; i++) {
                        var top = topNews[i];
                        var topTrioEl = {
                            top:top,
                            n2:secondNews.splice(0,1)[0],
                            n3:secondNews.splice(0,1)[0]
                        }
                        topNewsTrio.push(topTrioEl);
                    }

                    return topNewsTrio;

                }
            };
        });
})();
