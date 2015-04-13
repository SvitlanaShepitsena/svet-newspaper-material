mainServices.service('UserService', [
    '$http', '$q', '$cacheFactory', 'UtilService',
    function ($http, $q, $cacheFactory, UtilService) {
        
        this.clearCache = function () {
            var $httpCache = $cacheFactory.get('$http');
            $httpCache.remove('api/admin/profile');
        };

        this.checkConfirmCode = function (code) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: 'api/register/check',
                data: {
                    code: code
                }
            }).
            success(function (data, status, headers, config) {
                deferred.resolve();
            }).
            error(function (data, status, headers, config) {
                deferred.reject();
            });

            return deferred.promise;
        };

        this.register = function (code, password) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: 'api/register',
                data: {
                    code: code,
                    password: password
                }
            }).
            success(function (data, status, headers, config) {
                deferred.resolve();
            }).
            error(function (data, status, headers, config) {
                deferred.reject();
            });

            return deferred.promise;
        };

        this.admin = {

            hasPermission: function (permission) {
                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: 'api/admin/profile',
                    cache: true
                }).
                success(function (data, status, headers, config) {
                    deferred.resolve(UtilService.inArray(data.permissions, permission));
                }).
                error(function (data, status, headers, config) {
                    deferred.reject();
                });

                return deferred.promise;
            },

            getProfile: function () {

                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: 'api/admin/profile'
                }).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject();
                });

                return deferred.promise;

            },

            updateProfile: function (profile) {

                var deferred = $q.defer();

                $http({
                    method: 'PUT',
                    url: 'api/admin/profile',
                    data: profile
                }).
                success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).
                error(function (data, status, headers, config) {
                    deferred.reject();
                });

                return deferred.promise;

            },

            getUser: function () {
                var deferred = $q.defer();

                $http({
                    method: 'POST',
                    url: 'api/admin/user',
                    data: {
                        id: [],
                        permissions: []
                    }
                }).
                success(function (data, status, headers, config) {
                    deferred.resolve();
                }).
                error(function (data, status, headers, config) {
                    deferred.reject();
                });

                return deferred.promise;
            },

            inviteUser: function (email) {
                var deferred = $q.defer();

                $http({
                    method: 'POST',
                    url: 'api/admin/invite',
                    data: {
                        email: email
                    }
                }).
                success(function (data, status, headers, config) {
                    deferred.resolve();
                }).
                error(function (data, status, headers, config) {
                    deferred.reject(data.message);
                });

                return deferred.promise;
            }

        };

    }
]);