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
                    var btns = el.find('button').css('padding', '6px 12px');
                    btns.css('float', 'left');
                    var btngroup = el.find('btn-group').css('display', 'block');
                    btngroup.css('display', 'block');
                    btngroup.css('float', 'left');
                    btngroup.css('font-size', '14px');
                    btngroup.css('line-height', '20px');
                    btngroup.css('margin-bottom', '5px');
                    btngroup.css('margin-left', '5px');
                    btngroup.css('position', 'relative');
                    btngroup.css('vertical-align', 'middle');
                    console.log('text');
                    $scope.myContent = '';
                }
            };
        });
})();
