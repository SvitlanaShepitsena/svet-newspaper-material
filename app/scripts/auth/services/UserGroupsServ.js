(function () {
    'use strict';

    angular.module('auth')
        .factory('UserGroupsServ', function ($q, url,$firebaseObject) {
                var usersUrl = url+'/user-management/users/';
            return {

                getGroups: function (userId) {
                    return $q(function (resolve, reject) {
                        var userUrl = usersUrl+userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));

                        userObj.$loaded().then(function () {
                            resolve(userObj.groups);
                        })



                    });
                }
            };
        });
})();
