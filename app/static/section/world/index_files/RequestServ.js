(function () {
    'use strict';
    angular.module('auth')
        .factory('RequestServ', function ($q, users, $firebaseObject, $firebaseArray) {
            return {
                submitRequest: function (userId) {
                    return $q(function (resolve, reject) {
                        var userUrl = users + userId;
                        var userObj = $firebaseObject(new Firebase(userUrl));
                        userObj.$loaded().then(function () {
                            userObj.profile.requestCorporateSubmited = {
                                submitted: true,
                                submittedDate: moment().format('x'),
                                accepted: false,
                                rejected: false
                            };
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
                        var userRequestUrl = users + userId + '/profile/requestCorporateSubmited';
                        var userRequestObj = $firebaseObject(new Firebase(userRequestUrl));
                        userRequestObj.$loaded().then(function () {
                            userRequestObj.$remove();
                            userRequestObj.$save().then(function (success) {
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
                        var userUrl = users + userId + '/profile';
                        var userObj = $firebaseObject(new Firebase(userUrl));
                        userObj.$loaded().then(function () {
                            userObj.requestCorporateSubmited.accepted = true;
                            userObj.requestCorporateSubmited.rejected = false;
                            userObj.requestCorporateSubmited.decisionDate = moment().format('x');
                            userObj.role = 'customer';
                            userObj.$save().then(function (success) {
                                resolve(success);
                            })
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });
                    });
                },
                rejectRequest: function (userId) {
                    return $q(function (resolve, reject) {
                        var userUrl = users + userId + '/profile';
                        var userObj = $firebaseObject(new Firebase(userUrl));
                        userObj.$loaded().then(function () {
                            userObj.requestCorporateSubmited.rejected = true;
                            userObj.requestCorporateSubmited.accepted = false;
                            userObj.requestCorporateSubmited.decisionDate = moment().format('x');
                            userObj.role = 'reader';
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
                                if (user.profile.requestCorporateSubmited) { requests.push(user);
                                }
                            }
                            resolve(requests);
                        }).catch(function (error) {
                            console.log(userid + 'does not exists');
                            reject(error);
                        });
                    });
                }
            };
        });
})();
