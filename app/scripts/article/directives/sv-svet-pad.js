(function () {
    'use strict';
    angular.module('article')
        //.config(function ($provide) {
        //    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions){
        //        // $delegate is the taOptions we are decorating
        //        // register the tool with textAngular
        //        taOptions.toolbar = [
        //            ['h1', 'p', 'pre', 'quote'],
        //            ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
        //            ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
        //            ['html', 'insertImage','insertLink', 'insertVideo', 'wordcount', 'charcount']
        //        ];
        //        return taOptions;
        //    }]);
        //})
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
                    btns.css('font-size', '14px');
                    btns.css('color', '#757575');
                    $scope.myContent = '';
                }
            };
        });
})();
