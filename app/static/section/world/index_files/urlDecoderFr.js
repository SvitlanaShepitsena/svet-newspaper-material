(function () {
    'use strict';

    angular.module('article')
        .filter('urlDecoderFr', function () {
            return function (html) {
                if (html) {

                    return html.replace(/&#34;/g, '"');
                }
            };
        });
})();
