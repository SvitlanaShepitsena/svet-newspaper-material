(function () {
    'use strict';
    angular.module('article')
        .config(function ($provide) {
            $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
                // $delegate is the taOptions we are decorating
                // register the tool with textAngular
                taOptions.toolbar = [
                    ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'pre', 'quote'],
                    ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
                    ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
                    ['html', 'insertImage', 'insertLink', 'wordcount', 'charcount']
                ];
                return taOptions;
            }]);
        })
        .value('svTextAngular', {selected: false})
        .directive('svSvetPad', function (url, svTextAngular) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-svet-pad.html',
                scope: {
                    body: '='
                },
                link: function ($scope, el, attrs) {

                    var editorImg = el.find('.ta-scroll-window > .ta-bind >p > img');
                    editorImg.css({
                        'width': '280px',
                        'max-width': '280px',
                    });
                    var svetPad = el.find('#svetPad')[0].classList;
                    $scope.$watchCollection(function () {
                        return svetPad;
                    }, function (newValue, oldValue) {
                        if (newValue && newValue !== oldValue) {
                            svTextAngular.selected = _.contains(newValue, 'focussed');
                        }
                    });
                    var editorDiv = el.find('div');
                    editorDiv.css({
                        'margin-bottom': '4px',
                    });
                    var editorText = el.find('button, #toolbarWC, #toolbarCC');
                    editorText.css({
                        'font-size': '12px',
                        'display': 'inline-block',
                        'padding': '6px 12px',
                    });
                    var editorButton = el.find('button');
                    editorButton.css({
                        'float': 'left',
                        'color': '#757575',
                    });
                    $scope.myContent = '';
                }
            };
        });
})();
