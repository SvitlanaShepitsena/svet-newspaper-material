(function () {
    'use strict';
    angular.module('article')
        .directive('svOneArticle', function (userAuth) {
            return {
                replace: true,
                scope: {
                    news: '='
                },
                templateUrl: 'scripts/article/directives/sv-one-article.html',
                link: function ($scope, el, attrs) {
                    $scope.params = {sectionName: $scope.news.section};

                    $scope.user = userAuth.profile;
                    $scope.rating1 = 5;
                    $scope.rating2 = 2;
                    $scope.isReadonly = true;
                    $scope.rateFunction = function (rating) {
                        console.log("Rating selected: " + rating);
                    };
                    $scope.$watch('news.comments', function (newValue, oldValue) {
                        if (newValue) {
                            $scope.comments = _.toArray(newValue);
                            console.log(newValue);
                        }
                    });

                }
            };
        });
})();
