(function () {
    'use strict';
    angular.module('article')
        .factory('NewsProcessServ', function () {
            return {
                get: function (newsObj) {
                    var newsTrios = [];
                    var newsGrid = [];
                    var topNews = [];
                    var secondNews = [];
                    //ONLY ONE TOP NEWS
                    var isTopNewsChosen = false;
                    _.forInRight(newsObj, function (value, key) {
                        if (_.isObject(value)) {
                            if (value.isTopNews && !isTopNewsChosen) {
                                topNews.push(value);
                                isTopNewsChosen = true;
                            } else {
                                if (value.title && value.body) {
                                    secondNews.push(value);
                                }
                            }
                        }
                    });
                    for (var i = 0; i < topNews.length; i++) {
                        var top = topNews[i];
                        var topTrioEl = {
                            top: top,
                            n2: secondNews.splice(0, 1)[0],
                            n3: secondNews.splice(0, 1)[0]
                        }
                        newsTrios.push(topTrioEl);
                    }
                    return {trios: newsTrios, newsGrid: secondNews};
                }
            };
        });
})();
