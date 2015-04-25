(function () {
    'use strict';

    angular.module('auth')
        .directive('svBusinessAccountRequests', function (RequestServ, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-business-account-requests.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    RequestServ.getAllRequests().then(function (requests) {
                        $scope.users = requests;
                    })

                    $scope.accept = function (user) {
                        console.log($scope.user);

                        RequestServ.acceptRequest(user.id).then(function () {
                            var index = $scope.users.indexOf(user);
                            $scope.users.splice(index, 1);
                            toastr.info('request has been accepted');
                        })
                    };
                    $scope.reject = function (user) {
                        RequestServ.cancelRequest(user.id).then(function () {
                            var index = $scope.users.indexOf(user);
                            $scope.users.splice(index, 1);
                            toastr.info('request has been rejected');
                        })

                    };

                }
            };
        });
})();
