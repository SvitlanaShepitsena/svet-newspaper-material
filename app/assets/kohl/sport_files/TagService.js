mainServices.service('TagService', [
    '$http', '$q',
    function ($http, $q) {

        this.getTags = function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/tags',
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

        this.admin = {
            addTag: function (text) {
                var deferred = $q.defer();

                $http({
                    method: 'POST',
                    url: 'api/admin/tag',
                    data: {
                        text: text
                    }
                }).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(status);
                });

                return deferred.promise;
            },
            getTags: function () {
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: 'api/admin/tags'
                }).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(status);
                });

                return deferred.promise;
            }
        };

    }
]);