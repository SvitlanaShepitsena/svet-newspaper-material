(function () {
    'use strict';
    angular.module('sections.home')
        .factory('ImageSizeServ', function ($q) {
            return {
                getScaledHeight: function (imgUrl, scaledWidth) {
                    return $q(function (resolve, reject) {
                        var img = new Image();
                        var image = {};
                        img.onload = function () {
                            var realWidth = img.width;
                            var realHeight = img.height;
                            var widthRatio = scaledWidth / realWidth;
                            resolve(Math.floor(realHeight * widthRatio));
                        };
                        img.src = imgUrl;
                    });
                }
            };
        });
})();
