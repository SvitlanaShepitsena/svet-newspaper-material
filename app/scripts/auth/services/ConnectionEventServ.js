(function () {
    'use strict';

    angular.module('auth')
        .factory('ConnectionEventServ', function ($q, url, $firebaseArray) {
            var eventsCorporateUrl = url + '/events/corporate/';
            var eventsPublicUrl = url + '/events/public/';

            return {
                allCorporate: function () {
                    var eventsArray = $firebaseArray(new Firebase(eventsCorporateUrl));
                    return eventsArray;
                },
                allPublic: function () {
                    var eventsArray = $firebaseArray(new Firebase(eventsCorporateUrl));
                    return eventsArray;
                },

                saveCorporateEvent: function (event) {
                    return $q(function (resolve, reject) {
                        var eventsArray = $firebaseArray(new Firebase(eventsCorporateUrl));
                        eventsArray.$add(event).then(function (uid) {
                            resolve(uid);
                        });
                    });
                }
            };
        });
})();
