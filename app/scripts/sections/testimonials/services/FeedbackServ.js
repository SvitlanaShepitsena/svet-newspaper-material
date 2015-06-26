(function () {
    'use strict';
    angular.module('sections.testimonials')
        .factory('FeedbackServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            return {
                get: function () {
                },
                getAssync: function () {
                    return $q(function (resolve, reject) {
                    });
                }
            };
        });
})();
