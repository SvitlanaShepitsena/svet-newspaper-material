(function () {
    'use strict';

    angular.module('auth')
        .factory('PdfSubscriptionsServ', function ($q, urlUsers, $firebaseObject, CurrentUserServ) {
            return {

                getObjectRef: function () {
                    var userKey = CurrentUserServ.get().key ;

                    var userUrl = urlUsers.url + userKey + '/pdfSub';
                    var userObj = $firebaseObject(new Firebase(userUrl));
                    return userObj;
                }
            };
        });
})();
