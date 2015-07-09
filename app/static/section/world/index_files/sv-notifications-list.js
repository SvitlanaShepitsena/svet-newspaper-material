(function () {
    'use strict';
    angular.module('auth.notifications')
        .directive('svNotificationsList', function (userAuth, $mdMedia, NotificationsServ, $state) {
            return {
                templateUrl: 'scripts/auth/notifications/directives/sv-notifications-list.html',
                link: function ($scope, el, attrs) {
                    $scope.$watchCollection('user.notifications', function (notifications) {
                        if (!notifications) {
                            return;
                        }
                        $scope.unopened = _.filter(notifications, function (notification) {
                            return notification.opened === false;
                        }).length;
                        //$scope.notifications = _.toArray(notifications);
                    });
                    $scope.markAllOpened = function () {
                        NotificationsServ.markAllNotificationsOpened();
                    };
                    $scope.markOpened = function (notification) {
                        NotificationsServ.markNotificationOpened(notification.$id);
                        $state.go('app.events.one-event', {eid: notification.eid});
                    };
                }
            };
        });
})();
