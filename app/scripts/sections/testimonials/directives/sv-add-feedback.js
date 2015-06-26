(function () {
    'use strict';

    angular.module('sections.testimonials')
        .directive('svAddFeedback', function (FeedbackServ, userAuth, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/testimonials/directives/sv-add-feedback.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    resetForm();
                    $scope.user = userAuth.profile;

                    $scope.submitFeedback = function () {
                        preprocessFeedback();
                        FeedbackServ.saveFeedback($scope.feedback).then(function (key) {
                            toastr.success('Your feedback has been successfully added');
                            resetForm();
                        }).catch(function (error) {
                            toastr.warning(error);
                        });
                    };

                    function resetForm() {
                        $scope.feedback = {
                            body: '',
                            company: '',
                            authorKey: ''
                        }

                    }

                    function preprocessFeedback() {
                        if (userAuth.profile) {
                            $scope.feedback.authorKey = userAuth.key,
                                $scope.feedback.timestamp = moment().format('x');
                        }

                    }

                }
            };
        });
})();
