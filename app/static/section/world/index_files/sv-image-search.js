(function () {
    'use strict';
    angular.module('article')
        .directive('svImageSearch', function (ImageSearchServ,$rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-image-search.html',
                scope: {
                    insertImage: '&'
                },
                link: function ($scope, el, attrs) {
                    $scope.q = {data: $rootScope.title.replace(/&#34;/g, '"')};
                    $scope.runGoogleSearch = function (query) {
                        if (!query) {
                            return;
                        }
                        ImageSearchServ.fetch(query).then(function (results) {
                            $scope.images = results;
                        })
                    };
                }
            };
        });
})();
