mainServices.service('ContributorService', [
    '$http', '$q',
    function ($http, $q) {

        this.getContributors = function (packageId) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/contributors/' + packageId,
                cache: true
            }).
            success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function (data, status, headers, config) {
                deferred.reject(status);
            });

            return deferred.promise;
        };

        this.getContributorByName = function (name) {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/contributor?name=' + name.replace(/ /g, '-')
            }).
            success(function (data, status, headers, config) {
                deferred.resolve(data);
            }).
            error(function (data, status, headers, config) {
                deferred.reject(status);
            });

            return deferred.promise;
        };

        this.admin = {
            
        };

    }
]);