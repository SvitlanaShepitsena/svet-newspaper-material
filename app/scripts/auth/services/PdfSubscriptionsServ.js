(function () {
    'use strict';

    angular.module('auth')
        .factory('PdfSubscriptionsServ', function ($q, urlUsers, $firebaseObject) {
            return {

                getObjectRef: function (userId) {


                    var userUrl = urlUsers.url + userId + '/pdfSub';
                    var userObj = $firebaseObject(new Firebase(userUrl));
                    return userObj;
                }
            };
        });
})();
