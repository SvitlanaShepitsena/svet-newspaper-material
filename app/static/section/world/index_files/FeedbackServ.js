(function () {
    'use strict';
    angular.module('sections.testimonials')
        .factory('FeedbackServ', function ($q, url, users, $firebaseObject, $firebaseArray) {
            var ref = new Firebase(url + 'feedbacks');
            return {
                saveFeedback: function (feedback) {
                    return $q(function (resolve, reject) {
                        if (!feedback.$id) {
                            var feedbacksArr = $firebaseArray(ref);
                            feedbacksArr.$add(feedback).then(function (ref) {
                                resolve(ref.key());
                            }).catch(function (error) {
                                reject(error);
                            });
                        } else {
                            var feedbackDb = $firebaseObject(ref.child(feedback.$id));
                            feedbackDb.$loaded().then(function () {
                                feedbackDb = _.extend(feedbackDb, feedback);
                                feedbackDb.$save().then(function () {
                                    resolve();
                                })
                            })

                        }
                    });
                },

                removeFeedback: function (feedbackKey) {
                    return $q(function (resolve, reject) {
                        var feedbackDb = $firebaseObject(ref.child(feedbackKey));
                        feedbackDb.$loaded().then(function () {
                            feedbackDb.$remove().then(function () {
                                resolve();
                            });
                        })

                    });
                },
                all: function () {
                    return $firebaseArray(ref);
                }
            };
        });
})();
