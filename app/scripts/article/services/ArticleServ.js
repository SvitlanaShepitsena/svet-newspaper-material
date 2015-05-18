(function () {
    'use strict';
    angular.module('article')
        .factory('ArticleServ', function ($q, $firebaseArray, $firebaseObject, url, userAuth, ArticleProcessServ, NewsProcessServ) {
            var ref = new Firebase(url + 'articles/');
            return{

            }
        });

})();
