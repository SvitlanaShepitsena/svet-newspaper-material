(function () {
    'use strict';
    angular.module('sections.testimonials')
        .factory('FeedbackServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var ref = new Firebase(url + 'feedbacks');
            return {
                saveFeedback: function (feedback) {
                    return $q(function (resolve, reject) {
                        var feedbacksArr = $firebaseArray(ref);
                        feedbacksArr.$add(feedback).then(function (ref) {
                            resolve(ref.key());
                        }).catch(function (error) {
                            reject(error);
                        });
                    });
                }
            };
        });
})();
