mainControllers.controller('XamlViewerController', [
    '$scope', '$modalInstance', 'icon',
    function ($scope, $modalInstance, icon) {
        
        $scope.icon = icon;

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
]);