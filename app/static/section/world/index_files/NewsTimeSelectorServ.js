(function () {
    'use strict';
    angular.module('article')
        .factory('NewsTimeSelectorServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                select: function (articles) {
                    // filter by time constrain
                    var fresharticles = articles
                    return fresharticles;
                }
            };
        });
})();
