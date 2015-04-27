(function () {
    'use strict';

    angular.module('notifications')
        .directive('svNotificationsList', function ($rootScope) {
            return {
                templateUrl: 'scripts/notifications/directives/sv-notifications-list.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $rootScope.$watch('user', function (newVal) {
                        $scope.user = newVal;
                    });
                }
            };
        });
})();
