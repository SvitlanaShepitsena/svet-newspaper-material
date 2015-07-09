(function () {
    'use strict';

    angular.module('sections.testimonials')
        .directive('svFeedbackList', function (FeedbackServ) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/testimonials/directives/sv-feedback-list.html',
                scope: {
                    showFeedbackModal:'&'
                },
                link: function ($scope, el, attrs) {
                    var feedbacks = FeedbackServ.all();

                    feedbacks.$loaded().then(function () {
                        $scope.feedbacks = feedbacks;

                        feedbacks.$watch(function () {
                            $scope.feedbacks = feedbacks;
                        });

                    });

                }
            };
        });
})();
