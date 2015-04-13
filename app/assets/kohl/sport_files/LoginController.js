mainControllers.controller('LoginController', [
    '$scope', '$location', 'AuthService',
    function ($scope, $location, AuthService) {
        
        $scope.signIn = function () {
            $scope.state.isProcessing = true;

            var promise = AuthService.asyncAuth($scope.auth.username || '', $scope.auth.password);
            promise.then(function () {
                $location.url('/admin');
            }, function (status) {
                if (status == 401) {
                    $scope.state.isError = true;
                } else {
                    alert('Server Error... this is bad. Like beaker on fire bad.');
                }
                $scope.state.isProcessing = false;
            });
        };

        $scope.auth = {
            username: '',
            password: ''
        };

        $scope.state = {
            isError: false,
            isProcessing: false
        };

        $scope.goToIndex = function () {
            $location.url('/');
        };
    }
]);