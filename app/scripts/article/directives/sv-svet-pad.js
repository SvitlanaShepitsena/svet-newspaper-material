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
                    $scope.$on('include-image', function (evt, data) {
                        console.log(data);
                    });

                    var btns = el.find('button').css('padding', '6px 12px');
                    btns.css('float', 'left');
                    btns.css('font-size', '14px');
                    btns.css('color', '#757575');
                    $scope.myContent = '';
                }
            };
        });
})();
