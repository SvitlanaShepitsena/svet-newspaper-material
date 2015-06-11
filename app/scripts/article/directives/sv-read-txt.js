(function () {
    'use strict';

    angular.module('article')
        .directive('svReadTxt', function () {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-read-txt.html',
                scope: {
                    body: '='
                },

                link: function ($scope, el, attrs) {
                    $scope.showContent = function (txtFile) {

                        var arrTxtChunks = txtFile.split('\r\n\r\n');
                        var wrapper = $('<div></div>');
                        var paragraph, pWrapper;

                        arrTxtChunks.forEach(function (p) {
                            paragraph = p.replace(/\r\n/g, '\s');
                            pWrapper = "<p><br></p><p>" + paragraph + "</p>";
                            wrapper.append(pWrapper);

                        });
                        $scope.body = wrapper.html();
                    };

                }
            };
        });
})();
