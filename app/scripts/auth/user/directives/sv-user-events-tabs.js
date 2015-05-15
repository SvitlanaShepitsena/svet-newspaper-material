(function () {
    'use strict';
    angular.module('auth.user')
        .directive('svUserEventsTabs', function (ConnectionEventServ, toastr, userAuth) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/user/directives/sv-user-events-tabs.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.events = ConnectionEventServ.allCorporate();
                    $scope.data = {selectedIndex: 2};
                    $scope.acceptInvitation = function (svetEvent) {
                        ConnectionEventServ.addCustomerToEvent(svetEvent, userAuth.profile).then(function () {
                            toastr.info('You registered to event');
                        })
                    };
                    $scope.cancelAcceptedInvitation = function (svetEvent) {
                        ConnectionEventServ.removeCustomerFromEvent(svetEvent, userAuth.profile).then(function () {
                            toastr.warning('You were unlinked  from event');
                        })
                    };
                }
            };
        });
})();
