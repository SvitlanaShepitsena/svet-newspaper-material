(function () {
    'use strict';
    angular.module('article')
        .factory('ArticlesServ', function (NewsTimeSelectorServ, $q, url, users, $firebaseObject, $firebaseArray) {
            var ref = new Firebase(url + 'articles');
            var articlesArr = $firebaseArray(ref);

            function getPublicNews(articles) {
                var publicNews = _.where(articles, {isPublic: true, isBlog: false});
            }

            return {
                setHomeNewsLive: function () {
                    return $q(function (resolve, reject) {
                        articlesArr.$loaded(function () {
                        })
                    });
                }
            };
        });
})();
