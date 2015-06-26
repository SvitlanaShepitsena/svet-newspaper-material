(function () {
    'use strict';

    angular.module('sections.testimonials')
        .controller('TestimonialsCtrl', function ($scope, $mdDialog) {

            $scope.showFeedbackModal = function () {
                $mdDialog.show(
                    {
                        controller: FeedbackModalController,
                        templateUrl: 'scripts/sections/testimonials/views/modalFeedback.html',
                    }
                );
            };
            function FeedbackModalController($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
                $scope.answer = function (answer) {
                    $mdDialog.hide(answer);
                };
            }
        });
})();

