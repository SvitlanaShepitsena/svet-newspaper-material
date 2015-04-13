mainControllers.controller('GettingStartedController', [
    '$scope', '$location', 'GitHubService',
    function ($scope, $location, GitHubService) {
        $scope.goToHome = function () {
            $location.url('/');
        };

        $scope.content = 'Loading...';

        var promise = GitHubService.getPage('getting-started');
        promise.then(function (page) {
            $scope.content = page.content;
            $scope.cached = page.cached;
        }, function () {

        });

        $scope.clearCache = function () {
            var promiseClear = GitHubService.clearPageCache('getting-started');
            promiseClear.then(function () {
                var promiseGet = GitHubService.getPage('getting-started');
                promiseGet.then(function (page) {
                    $scope.content = page.content;
                    $scope.cached = page.cached;
                }, function () {
                    // Error
                });
            }, function () {
                // Error
            });
        };
    }
]);