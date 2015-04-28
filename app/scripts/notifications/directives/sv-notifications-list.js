(function () {
    'use strict';
    angular.module('notifications')
        .directive('svNotificationsList', function ($rootScope, $mdMedia, NoteServ) {
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
                    $scope.showAll = function () {
                        $scope.unopened = $scope.user.notifications.length;
                    };
                    $rootScope.$watch('user', function (newVal) {
                        $scope.user = newVal;
                        if ($scope.user && $scope.user.notifications) {
                            $scope.unopened = _.where($scope.user.notifications, {opened: false}).length;
                        }
                    }, true);
                    $rootScope.$watch('loadingUser', function (newVal) {
                        $scope.loadingUser = newVal;
                    });
                }
            };
        });
})();
