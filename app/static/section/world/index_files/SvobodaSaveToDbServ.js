(function () {
    'use strict';
    angular.module('article')
        .factory('SvobodaSaveToDbServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var ref = new Firebase(url + '/svoboda');
            var svoboda = $firebaseArray(ref);
            return {
                cleanSvoboda: function () {
                    var promises = [];
                    svoboda.$loaded().then(function () {
                        svoboda.forEach(function (oneNewOld) {
                            promises.push(svoboda.$remove(oneNewOld));
                        });
                    });
                    return $q.all(promises);
                },
                saveAll: function (news) {
                    var svoboda = $firebaseArray(ref);
                    var promises = [];
                    news.forEach(function (oneNews) {
                        promises.push(svoboda.$add(oneNews));
                    });
                    return $q.all(promises);
                },
                getRandom: function () {
                    return $q(function (resolve, reject) {
                        svoboda.$loaded(function () {
                            var random= _.random(0,svoboda.length);
                            resolve(svoboda[random]);
                        })
                    });
                }
            };
        });
})();
