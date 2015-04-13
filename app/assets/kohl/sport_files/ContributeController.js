mainControllers.controller('ContributeController', [
    '$scope', '$location',
    function ($scope, $location) {

        $scope.goToHome = function () {
            $location.url('/');
        };

        $scope.contributorForm = {
            name: '',
            email: '',
            twitter: '',
            icons: [null, null, null, null, null]
        };

    }
]);