(function () {
    'use strict';

    angular.module('auth')
        .directive('svBusinessAccountRequests', function (RequestServ, toastr,CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-business-account-requests.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    RequestServ.getAllRequests().then(function (requests) {
                        $scope.users = requests;
                    })

                    $scope.accept = function (user) {

                        RequestServ.acceptRequest(user.key).then(function () {
                            toastr.info('request has been accepted');
                        })
                    };
                    $scope.reject = function (user) {
                        RequestServ.rejectRequest(user.key).then(function () {
                            toastr.info('request has been rejected');
                        })

                    };

                }
            };
        });
})();
