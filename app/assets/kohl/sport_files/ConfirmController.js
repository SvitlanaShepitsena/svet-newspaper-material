mainControllers.controller('ConfirmController', [
    '$scope', '$location', '$routeParams', 'UserService',
    function ($scope, $location, $routeParams, UserService) {
        
        $scope.state = {
            step: 'loading'
        };

        if ($routeParams.code) {
            var promise = UserService.checkConfirmCode($routeParams.code);
            promise.then(function () {
                $scope.state.step = 'confirm';
            }, function () {
                $scope.state.step = 'invalid';
            });
        } else {
            $scope.state.step = 'invalid';
        }

        $scope.confirmEmail = function () {
            $scope.state.step = 'password';
        };

        $scope.register = function () {
            $scope.state.isProcessing = true;

            var promise = UserService.register($routeParams.code, $scope.auth.password);
            promise.then(function () {
                $location.url('/admin');
            }, function (status) {
                alert('Error: Failed to register.');
            });
        };

        $scope.goToSupport = function () {
            window.location = 'https://twitter.com/templarian';
        };

        $scope.auth = {
            password: '',
            passwordConfirm: ''
        };

        $scope.goToIndex = function () {
            $location.url('/');
        };
    }
]);