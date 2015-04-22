(function () {
    'use strict';

    angular.module('auth')
        .directive('svPdfSubscription', function (PdfSubscriptionsServ) {
            return {
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-pdf-subscription.html',
                scope: {

                },
                link: function ($scope, user) {
                    var pdfSubObj = PdfSubscriptionsServ.getObjectRef(user.id);

                    pdfSubObj.$bindTo($scope, 'pdfSub').then(function () {
                        $scope.pdfLoaded = true;
                    });

                }
            };
        });
})();
