(function () {
    'use strict';

    angular.module('auth')
        .factory('RequestServ', function ($q, users, $firebaseObject,$firebaseArray) {
            return {
                getStatus: function (userId) {
                    return $q(function (resolve, reject) {

                        var userUrl = users + userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));

                        userObj.$loaded().then(function () {
                            if (userObj.requestCorporateSubmited) {
                                resolve(true);
                            } else {
                                resolve(false)
                            }
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });

                    });
                },
                submitRequest: function (userId) {
                    return $q(function (resolve, reject) {

                        var userUrl = users + userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));

                        userObj.$loaded().then(function () {
                            userObj.requestCorporateSubmited = true;

                            userObj.$save().then(function (success) {
                                resolve(success);
                            })
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });

                    });
                },
                cancelRequest: function (userId) {
                    return $q(function (resolve, reject) {

                        var userUrl = users + userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));

                        userObj.$loaded().then(function () {
                            userObj.requestCorporateSubmited = false;
                            userObj.$save().then(function (success) {
                                resolve(success);
                            })
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });

                    });
                },
                acceptRequest: function (userId) {
                    return $q(function (resolve, reject) {

                        var userUrl = users + userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));

                        userObj.$loaded().then(function () {
                            userObj.requestCorporateSubmited = false;
                            userObj.groups=['customer'];
                            userObj.$save().then(function (success) {
                                resolve(success);
                            })
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });

                    });
                },
                getAllRequests: function () {
                    return $q(function (resolve, reject) {

                        var usersArr = $firebaseArray(new Firebase(users));
                        var requests = [];

                        usersArr.$loaded().then(function () {
                            for (var i = 0; i < usersArr.length; i++) {
                                var user = usersArr[i];
                                if (user.requestCorporateSubmited) {
                                    requests.push(user);
                                }
                            }
                            resolve(requests);
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });

                    });
                },

            };
        });
})();
