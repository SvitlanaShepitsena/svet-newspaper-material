mainControllers.controller('StyleController', [
    '$scope', '$location', 'GitHubService',
    function ($scope, $location, GitHubService) {
        $scope.goToHome = function () {
            $location.url('/');
        };

        $scope.content = 'Loading...';

        var promise = GitHubService.getPage('style');
        promise.then(function (page) {
            $scope.content = page.content;
            $scope.cached = page.cached;
        }, function () {

        });

        $scope.clearCache = function () {
            var promiseClear = GitHubService.clearPageCache('style');
            promiseClear.then(function () {
                var promiseGet = GitHubService.getPage('style');
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