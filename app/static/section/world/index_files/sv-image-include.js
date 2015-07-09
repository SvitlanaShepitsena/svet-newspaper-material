(function () {
    'use strict';
    angular.module('article')
        .directive('svImageInclude', function ($rootScope) {
            return {
                templateUrl: 'scripts/article/directives/sv-image-include.html',
                link: function ($scope, el, attrs) {
                    $scope.includeImgToArticle = function () {
                        $rootScope.$broadcast('include-image', {url: $scope.url});
                    };
                }
            };
        });
})();
