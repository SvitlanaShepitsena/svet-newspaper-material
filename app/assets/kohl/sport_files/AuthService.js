mainServices.service('AuthService', [
    '$http', '$q',
    function ($http, $q) {

        this.asyncAuth = function (username, password) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: 'api/auth',
                data: {
                    username: username,
                    password: password
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

        this.asyncLogout = function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/logout'
            }).
            success(function (data, status, headers, config) {
                deferred.resolve();
            }).
            error(function (data, status, headers, config) {
                deferred.reject();
            });

            return deferred.promise;
        };

        this.isAuthed = function () {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: 'api/authed'
            }).
            success(function (data, status, headers, config) {
                deferred.resolve();
            }).
            error(function (data, status, headers, config) {
                deferred.reject();
            });

            return deferred.promise;
        };

    }
]);