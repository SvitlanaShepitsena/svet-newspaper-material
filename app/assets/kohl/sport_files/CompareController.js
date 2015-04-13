mainControllers.controller('CompareController', [
    '$scope', '$modalInstance', 'IconService', 'iconDataBefore', 'iconDataAfter', 'size',
    function ($scope, $modalInstance, IconService, iconDataBefore, iconDataAfter, size) {

        $scope.iconDataBefore = iconDataBefore;
        $scope.iconDataAfter = iconDataAfter;
        var pSize = size > 24 ? size / 2 * 8 : size * 10;
        $scope.state = {
            size: size,
            stylePreview: {
                width: pSize + 'px',
                height: pSize + 'px'
            }
        };

        $scope.iconDataBeforeLength = iconDataBefore.length;
        $scope.iconDataAfterLength = iconDataAfter.length;

        $scope.iconPointsBeforeLength = IconService.parsePathString(iconDataBefore).length;
        $scope.iconPointsAfterLength = IconService.parsePathString(iconDataAfter).length;

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
]);