(function () {
    'use strict';

    angular.module('article')
        .filter('tagsFr', function () {
            return function (list, filterTags) {
                if (!list || !filterTags) {
                    return list;
                }
                var artWithTags = _.filter(list, function (article) {
                    var tags = article.tags;
                    if (tags) {
                        var arrTags= _.map(tags.split(','), function (oneTag) {
                         return oneTag.toLowerCase().trim();
                        });
                    var inter=_.intersection(arrTags, filterTags);
                    return inter.length>0;
                    }
                });

                return artWithTags;

            };
        });
})();
