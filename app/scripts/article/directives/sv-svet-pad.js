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
                    var text = el.find('#toolbarWC #toolbarCC');
                    text.css({
                        'font-size': '12px',
                    });




                    var btns = el.find('button');
                    btns.css({
                        'padding': '6px 12px',
                        'float': 'left',
                        'font-size': '12px',
                        'color': '#757575',
                    });
                    $scope.myContent = '';
                }
            };
        });
})();
