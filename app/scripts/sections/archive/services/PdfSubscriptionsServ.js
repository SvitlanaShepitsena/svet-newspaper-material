(function () {
    'use strict';
    angular.module('auth')
        .factory('PdfSubscriptionsServ', function ($q, urlUsers, $firebaseObject, userAuth) {
            return {
                getObjectRef: function () {
                    var currentUser = userAuth.profile;
                    if (!currentUser) {
                        return null;
                    }
                    var userKey = currentUser.key;
                    var userUrl = urlUsers.url + userKey + '/pdfSub';
                    var userObj = $firebaseObject(new Firebase(userUrl));
                    return userObj;
                }
            };
        });
})();
