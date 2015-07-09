(function () {
    'use strict';
    angular.module('auth.notifications')
        .directive('svNoticeIcon', function () {
            return {
                link: function ($scope, el, attrs) {
                    var iconElement = el.find('#svi');
                    $scope.$watch('hasNotices', function (newValue, oldValue) {
                        if (newValue) {
                            $scope.$apply(function () {
                                iconElement.addClass('icon--red2');
                            });
                        }
                    });
                }
            };
        });
})();
