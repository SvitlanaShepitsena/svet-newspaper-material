(function () {
    'use strict';
    angular.module('auth')
        .directive('svSubscriptionDialog', function () {
            return {
                scope:{},
                replace: true,
                templateUrl: 'scripts/auth/directives/sv-subscription-dialog.html',
                link: function ($scope, el, attrs) {
                    $scope.opendDialog = function(dialogId)
                    {
                        LxDialogService.open(dialogId);
                    };

                    $scope.closingDialog = function()
                    {
                        LxNotificationService.info('Dialog closed!');
                    };
                }
            };
        });
})();
