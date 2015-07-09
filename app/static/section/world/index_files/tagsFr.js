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
                        tags = tags.trim().toLowerCase();
                        if (_.contains(tags, ',')) {
                            var collection = tags.split(',');

                        } else {
                            collection = tags.split(' ');
                        }
                        var arrTags = _.map(collection, function (oneTag) {
                            return oneTag.toLowerCase().trim();
                        });
                        var inter = _.intersection(arrTags, filterTags);
                        return inter.length > 0;
                    }
                });

                return _.take(artWithTags,3);

            };
        });
})();
