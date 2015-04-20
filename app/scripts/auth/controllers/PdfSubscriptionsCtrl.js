(function () {
    'use strict';

    angular.module('auth')
        .controller('PdfSubscriptionsCtrl', function (PdfSubscriptionsServ, $scope, user) {
            var pdfSubObj = PdfSubscriptionsServ.getObjectRef(user.id);

            pdfSubObj.$bindTo($scope, 'pdfSub').then(function () {
                $scope.pdfLoaded = true;
            });
        });
})();

