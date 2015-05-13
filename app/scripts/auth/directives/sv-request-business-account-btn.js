(function () {
    'use strict';
    angular.module('auth')
        .directive('svRequestBusinessAccountBtn', function (RequestServ, user, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-request-business-account-btn.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = user;
                    $scope.cancelRequest = function () {
                        RequestServ.cancelRequest(user.key).then(function () {
                            toastr.warning('Your request for Svet Media Group  corporate account has been canceled');
                        });
                    };
                    $scope.submitRequest = function () {
                        RequestServ.submitRequest(user.key).then(function () {
                            toastr.info('Your request for Svet Media Group  submitted');
                        })
                    };
                }
            };
        });
})();
