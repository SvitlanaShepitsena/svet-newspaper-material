mainControllers.controller('SiteController', [
    '$scope', '$location', 'SiteService',
    function ($scope, $location, SiteService) {

        $scope.site = {
            name: '...'
        };

        var promiseSiteName = SiteService.getName();
        promiseSiteName.then(function (name) {
            $scope.site.name = name;
        }, function () {
            // Error
        });


    }
]);