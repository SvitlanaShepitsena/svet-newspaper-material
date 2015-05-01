(function () {
    'use strict';
    angular.module('notifications')
        .directive('svNotificationsList', function ($rootScope, $mdMedia, NotificationsServ, CurrentUserServ) {
            return {
                templateUrl: 'scripts/notifications/directives/sv-notifications-list.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.$watch(function () {
                        return $mdMedia('sm');
                    }, function (sm) {
                        $scope.sm = sm;
                    });

                    $scope.markAllOpened = function () {
                        NotificationsServ.markAllNoticesOpened();
                    };
                    $scope.markNoticeOpened = function (notice) {
                        console.log(notice);
                        NotificationsServ.markNoticeOpened(notice);
                    };
                    $scope.showAll = function () {
                        $scope.unopened = $scope.user.notices.length;
                    };
                    $scope.$watch(function () {
                        return CurrentUserServ.get();
                    }, function (newValue, oldValue) {
                        if (newValue === oldValue) {
                            return;
                        }
                        if (newValue && newValue.key) {
                            var key = newValue.key;
                            $scope.notices = NotificationsServ.getUserNotices(key);
                            $scope.notices.$loaded().then(function () {
                                $scope.notices.$watch(function () {
                                    $scope.unopened = _.filter($scope.notices, {opened: false}).length;
                                })
                            });
                        }
                    }, true);
                }
            };
        });
})();
