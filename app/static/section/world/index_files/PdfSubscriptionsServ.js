(function () {
    'use strict';
    angular.module('auth')
        .factory('PdfSubscriptionsServ', function ($q, users, $firebaseObject, userAuth) {
            return {
                getObjectRef: function () {
                    var currentUser = userAuth;
                    if (!currentUser) {
                        return null;
                    }
                    var userKey = currentUser.key;
                    var userSubscriptionUrl = users + userKey + '/profile/subscription';
                    return $firebaseObject(new Firebase(userSubscriptionUrl));
                }
            };
        });
})();
