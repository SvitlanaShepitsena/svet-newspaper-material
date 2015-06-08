(function () {
    'use strict';
    angular.module('common')
        .value('confirmBanMessage', {msg: 'Are you sure?'})
        .directive('svConfirmBan', function ($mdDialog, confirmBanMessage, toastr, $parse) {
            return {
                priority: -1,
                link: function ($scope, el, attrs) {
                    el.on('click', function (domEvent) {
                        domEvent.stopImmediatePropagation();
                        domEvent.preventDefault();
                        var customConfirmMessage = 'Ban ' + attrs.svConfirmBan + '?';
                        confirmBanMessage.msg = customConfirmMessage;
                        $mdDialog.show({
                            controller: function ($scope, $mdDialog, confirmBanMessage) {
                                $scope.message = confirmBanMessage.msg;
                                $scope.banByManager = function () {
                                    $mdDialog.hide(true);
                                }
                                $scope.cancel = function () {
                                    $mdDialog.cancel()
                                }
                            },
                            templateUrl: 'scripts/common/views/modalBanConfirm.html',
                        }).then(function () {
                            var banMethod = $parse(attrs.ngClick);
                            banMethod($scope);
                        })
                    })
                }
            };
        });
})();
