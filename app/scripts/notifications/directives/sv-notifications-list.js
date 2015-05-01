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
                        $scope.unopened = 0;
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
                            var notices = NotificationsServ.getUserNotices(key);
                            notices.$loaded().then(function () {
                                $scope.notices = notices;
                                $scope.unopened = _.filter(notices,{opened:false}).length;
                            })

                        }
                    },true);
                }
            };
        });
})();
