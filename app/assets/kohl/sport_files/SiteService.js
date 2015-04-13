mainServices.service('SiteService', [
    '$http', '$q',
    function ($http, $q) {

        this.getName = function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/init',
                cache: true
            }).
            success(function (data, status, headers, config) {
                deferred.resolve(data.name);
            }).
            error(function (data, status, headers, config) {
                deferred.reject();
            });

            return deferred.promise;
        };

        this.getPackages = function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/init',
                cache: true
            }).
            success(function (data, status, headers, config) {
                deferred.resolve(data.packages);
            }).
            error(function (data, status, headers, config) {
                deferred.reject();
            });

            return deferred.promise;
        };

        this.getPackage = function () {
            /// <summary>Get selected package</summary>
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/init',
                cache: true
            }).
            success(function (data, status, headers, config) {
                deferred.resolve(data.packages[0]);
            }).
            error(function (data, status, headers, config) {
                deferred.reject();
            });

            return deferred.promise;
        };

        this.admin = {
            getPackages: function () {
                /// <summary>Get all packages.</summary>
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: 'api/admin/packages',
                    cache: true
                }).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject();
                });

                return deferred.promise;
            }
        };

    }
]);