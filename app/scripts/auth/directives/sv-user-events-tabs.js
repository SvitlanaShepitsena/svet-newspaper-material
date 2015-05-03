(function () {
    'use strict';
    angular.module('auth')
        .directive('svUserEventsTabs', function (ConnectionEventServ, toastr, CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-user-events-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.events = ConnectionEventServ.allCorporate();
                    $scope.data = {selectedIndex: 2};

                    $scope.acceptInvitation = function (svetEvent) {
                        ConnectionEventServ.addCustomerToEvent(svetEvent, CurrentUserServ.get()).then(function () {

                            toastr.info('You registered to event');
                        })
                    };
                    $scope.cancelAcceptedInvitation = function (svetEvent) {
                        ConnectionEventServ.removeCustomerFromEvent(svetEvent, CurrentUserServ.get()).then(function () {
                            toastr.warning('You were unlinked  from event');
                        })
                    };
                }
            };
        });
})();
