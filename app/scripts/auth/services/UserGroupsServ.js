(function () {
    'use strict';

    angular.module('auth')
        .factory('UserGroupsServ', function ($q, url, $firebaseObject,$rootScope) {
            var usersUrl = url + '/user-management/users/';
            return {

                getGroups: function (userId) {
                    return $q(function (resolve, reject) {
                        var userUrl = usersUrl + userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));

                        userObj.$loaded().then(function () {
                            resolve(userObj.groups);
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });


                    });
                },
                setToReaderGroup: function (user) {
                    if (user.uid) {
                        user.id = user.uid;
                    }
                    return $q(function (resolve, reject) {
                        var userUrl = usersUrl;
                        var usersObj = $firebaseObject(new Firebase(userUrl));

                        usersObj[user.id] = user;
                        usersObj.$save(user.id).then(function (uid) {
                            resolve(uid);
                        });

                    });
                },
               isInGroup: function (group) {
                   if (!$rootScope.user || !$rootScope.user.groups) {
                       return false;
                   }
                   return $rootScope.user.groups.indexOf(group) !== -1;


               }

            };
        });
})();
