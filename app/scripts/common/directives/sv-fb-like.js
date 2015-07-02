(function () {
    'use strict';

    angular.module('common')
        .directive('svFbLike', function ($location, ezfb, $timeout) {
            return {
                templateUrl: 'scripts/common/directives/sv-fb-like.html',
                scope: {},
                link: function ($scope, el, attrs) {
                    $scope.pageUrl = 'http://svet.com/static/sport.html';

                    $scope.showMe = true;
                    //$timeout(function () {
                    //    var elementById = document.getElementById('kohlGallery');
                    //
                    //    ezfb.XFBML.parse(elementById);
                    //    var breakPoint = 1;
                    //
                    //}, 1000);
                }
            };
        });
})();
