(function () {
    'use strict';

    angular.module('auth')
        .factory('ProfileServ', function ($firebaseAuth,$firebaseObject, $q, url) {




            return {

                get: function () {

                    return $q(function (resolve, reject) {
                        var ref = new Firebase(url);
                        var authObj = $firebaseAuth(ref);

                        var user = authObj.$getAuth();

                        if (user) {
                            var profile = $firebaseObject(ref.child('profiles').child(user.uid));
                            profile.$loaded().then(function () {
                                if (profile.$value) {

                                }
                            })
                        } else {
                            console.log('logged out');
                            resolve(null);
                        }


                    });
                }
            };
        });
})();
