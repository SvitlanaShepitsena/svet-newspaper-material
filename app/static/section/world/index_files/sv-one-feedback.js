(function () {
    'use strict';

    angular.module('sections.testimonials')
        .constant('feedbackConst', {})
        .directive('svOneFeedback', function (userAuth, $mdDialog, feedbackConst, FeedbackServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/testimonials/directives/sv-one-feedback.html',
                scope: {
                    feedback: '=',
                    showFeedbackModal: '&'
                },
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth.profile;
                    $scope.user.key = userAuth.key;
                    $scope.isEditState = false;

                    $scope.editFeedback = function () {
                        feedbackConst.feedback = angular.copy($scope.feedback);
                        $scope.showFeedbackModal();
                    };
                    $scope.removeSvFeedback = function (feedback) {
                        FeedbackServ.removeFeedback(feedback.$id).then(function () {

                                toastr.warning('Feedback has been successfully deleted.')
                            }
                        )
                    };
                }
            };
        });
})();
