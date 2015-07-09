(function () {
    'use strict';
    angular.module('common')
        .value('confirmMessage', {msg: 'Are you sure?'})
        .directive('svConfirmDeletion', function ($mdDialog, confirmMessage, toastr, $parse) {
            return {
                priority: -1,
                link: function ($scope, el, attrs) {
                    el.on('click', function (domEvent) {
                        domEvent.stopImmediatePropagation();
                        domEvent.preventDefault();
                        var customConfirmMessage = 'Delete ' + attrs.svConfirmDeletion + '?';
                        confirmMessage.msg = customConfirmMessage;
                        $mdDialog.show({
                            controller: function ($scope, $mdDialog, confirmMessage) {
                                $scope.message = confirmMessage.msg;
                                $scope.delete = function () {
                                    $mdDialog.hide(true);
                                }
                                $scope.cancel = function () {
                                    $mdDialog.cancel()
                                }
                            },
                            templateUrl: 'scripts/common/views/modalDeleteConfirm.html',
                        }).then(function () {
                            var removalMethod = $parse(attrs.ngClick);
                            removalMethod($scope);
                        })
                    })
                }
            };
        });
})();
