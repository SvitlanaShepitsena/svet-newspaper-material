(function () {
    'use strict';

    angular.module('auth')
        .directive('svUserEventsTabs', function (ConnectionEventServ, toastr, $rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-events-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {

                    $rootScope.$watch('user', function (newVal) {
                        $scope.user = newVal;
                    })

                    $scope.events = ConnectionEventServ.allCorporate();
                    $scope.data = {selectedIndex: 2};

                    $scope.acceptInvitation = function (svetEvent) {
                        ConnectionEventServ.addCustomerToEvent(svetEvent, $scope.user).then(function () {
                            toastr.info('You registered to event');

                        })
                    };
                    $scope.cancelAcceptedInvitation = function (svetEvent) {
                        ConnectionEventServ.removeCustomerFromEvent(svetEvent, $scope.user).then(function () {
                            toastr.warning('You were unlinked  from event');

                        })
                    };

                }
            };
        });
})();
