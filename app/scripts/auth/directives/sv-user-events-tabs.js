(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserEventsTabs', function (ConnectionEventServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-events-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.events = ConnectionEventServ.allCorporate();
                    $scope.data.selectedIndex = 2;

                    $scope.acceptInvitation = function (svetEvent) {
                        console.log(svetEvent);
                    };

                }
            };
        });
})();
