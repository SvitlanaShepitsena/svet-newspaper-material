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
                    var firepadRef = new Firebase(url+'firepad');
                    var content = el.find('#firepad')[0];

                    var codeMirror = CodeMirror(content, { lineWrapping: true });
                    var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror,
                        { richTextShortcuts: true, richTextToolbar: true, defaultText: ''});


                }
            };
        });
})();
