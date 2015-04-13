mainServices.service('GitHubService', [
    '$http', '$q',
    function ($http, $q) {

        this.getPage = function (page) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/github/page',
                params: {
                    page: page
                }
            }).
            success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function (data, status, headers, config) {
                deferred.reject(status);
            });

            return deferred.promise;
        };

        this.clearPageCache = function (page) {
            var deferred = $q.defer();

            $http({
                method: 'DELETE',
                url: 'api/github/page',
                params: {
                    page: page
                }
            }).
            success(function (data, status, headers, config) {
                deferred.resolve();
            }).
            error(function (data, status, headers, config) {
                deferred.reject(status);
            });

            return deferred.promise;
        };

    }
]);