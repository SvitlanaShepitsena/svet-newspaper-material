(function () {
    'use strict';

    angular.module('article')
        .directive('svSvetPad', function (url) {

            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-svet-pad.html',
                scope: {
                    body: '='
                },
                link: function ($scope, el, attrs) {
                    console.log('text');
                    $scope.myContent = '';

                }
            };
        });
})();
