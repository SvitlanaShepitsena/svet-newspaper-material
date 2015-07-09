(function () {
    'use strict';
    angular.module('events')
        .directive('svSlideShow', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-slide-show.html',
                scope: {
                    numb: '=',
                    path: '@',
                    type: '@'
                },
                link: function ($scope, el, attrs) {
                    $scope.slides = [];
                    for (var i = 1; i <= $scope.numb; i++) {
                        var slide = {
                            url: $scope.path + '/' + i + '.' + $scope.type
                        }
                        $scope.slides.push(slide);
                    }
                }
            };
        });
})();
