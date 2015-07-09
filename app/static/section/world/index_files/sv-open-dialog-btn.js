(function () {
    'use strict';

    angular.module('sections.demographics')
        .directive('svOpenDialogBtn', function (feedbackConst) {
            return {
                replace: true,
                templateUrl: 'scripts/sections/demographics/directives/sv-open-dialog-btn.html',
                scope: {
                    modalMethod: '&',
                    btnImgIcon: '@',
                    imgWidth: '@',
                    imgHeight: '@',
                    linkName: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.imgWidth = $scope.imgWidth || "24px";
                    $scope.imgHeight = $scope.imgHeight || "24px";

                    $scope.beforeModalMethod = function () {
                        if (feedbackConst.feedback) {
                            feedbackConst.feedback=null;

                        }
                        $scope.modalMethod();
                    };
                }
            };
        });
})();
