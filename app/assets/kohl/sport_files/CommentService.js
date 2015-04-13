mainServices.service('CommentService', [
    '$http', '$q',
    function ($http, $q) {

        this.addComment = function (data) {
            var deferred = $q.defer();

            $http({
                method: 'POST',
                url: 'api/comment',
                data: data
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