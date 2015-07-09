(function () {
    'use strict';
    angular.module('article')
        .factory('ImageSearchServ', function ($q, $http, url, users, $firebaseObject, $firebaseArray) {
            var url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&callback=JSON_CALLBACK&tbs=sur:f";
            return {
                fetch: function (query) {
                    return $q(function (resolve, reject) {
                        var queryWithRequest=url+'&q='+encodeURI(query);

                        $http.jsonp(queryWithRequest)
                            .success(function (data) {
                                resolve(data.responseData.results);
                            });
                    });
                }
            };
        });
})();
