(function () {
    'use strict';

    angular.module('notifications')
        .directive('svNotificationsList', function () {
            return {
                replace: true,
                templateUrl: 'scripts/notifications/directives/sv-notifications-list.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
