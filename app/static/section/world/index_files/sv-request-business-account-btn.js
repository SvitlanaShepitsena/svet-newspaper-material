(function () {
    'use strict';
    angular.module('auth')
        .directive('svRequestBusinessAccountBtn', function (RequestServ, userAuth, toastr) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-request-business-account-btn.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.user = userAuth;

                    $scope.cancelRequest = function () {
                        RequestServ.cancelRequest(userAuth.key).then(function () {
                            toastr.warning('Your request for Svet Russian Media Group  corporate account has been canceled');
                        });
                    };
                    $scope.submitRequest = function () {
                        RequestServ.submitRequest(userAuth.key).then(function () {
                            toastr.info('Your request for Svet Russian Media Group  submitted');
                        })
                    };
                }
            };
        });
})();
