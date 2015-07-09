(function () {
    'use strict';
    angular.module('article')
        .directive('svOneArticle', function (userAuth, CommentsServ) {
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
                        var comments = [];
                        if (newValue) {
                            var keys = _.keys(newValue);
                            for (var i = 0; i < keys.length; i++) {
                                var key = keys[i];
                                var value = newValue[key];
                                value.$id = key;
                                comments.push(value);
                            }
                        }
                        $scope.comments = comments;
                    });

                    $scope.removeComment = function (comment) {
                        console.log(comment);
                        CommentsServ.removeComment($scope.news.$id, comment).then(function (id) {
                            console.log(id);

                        })

                    };

                }
            };
        });
})();
