(function () {
    'use strict';
    angular.module('auth')
        .directive('svPdfSubscription', function (PdfSubscriptionsServ,CurrentUserServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-pdf-subscription.html',
                scope: {},
                link: function ($scope) {
                    $scope.user = CurrentUserServ.get();

                    var pdfSubObj = PdfSubscriptionsServ.getObjectRef();
                    if (pdfSubObj) {
                        $scope.requestSubmited =true;
                        pdfSubObj.$bindTo($scope, 'pdfSub').then(function () {
                        $scope.requestSubmited =false;
                        }).catch(function (error) {
                        $scope.requestSubmited =false;
                        });
                    }
                }
            };
        });
})();
