(function () {
    'use strict';

    angular.module('article')
        .directive('svImageSearch', function (ImageSearchServ, $http) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-image-search.html',
                scope: {

                },
                link: function ($scope, el, attrs) {
                    $scope.runGoogleSearch = function () {
                        var url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=maya+plisetskaya&callback=JSON_CALLBACK";

                        $http.jsonp(url)
                            .success(function(data){
                                console.log(data);
                            });
                    };
                }
            };
        });
})();
