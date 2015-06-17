(function () {
    'use strict';

    angular.module('common')
        .directive('svImageScale', function ($window) {
            function imgScale(img, el, winHeight, winWidth) {
                var heightScale = .64;
                var widthScale = .9;

                var height = img.naturalHeight;
                var width = img.naturalWidth;

                if (height >= width) {
                    var heightScaled = (heightScale * winHeight).toFixed(0);
                    el.css('height', heightScaled + 'px');
                    el.css('width', 'auto');

                    angular.element(img).css('height', '100%');
                    img.style.width = 'auto';

                }
                if (width > height) {
                    el.css('width', (widthScale * winWidth).toFixed(0) + 'px');
                    el.css('height', 'auto');

                    angular.element(img).css('height', 'auto');
                    img.style.width = '100%';

                }
            }

            return {
                link: function ($scope, el, attrs) {
                    var maxWidth = 1000;
                    var winHeight = window.innerHeight,
                        winWidth = window.innerWidth > maxWidth ? maxWidth : window.innerWidth;
                    $(window).resize(function () {
                        winHeight = window.innerHeight;
                        winWidth = window.innerWidth > maxWidth ? maxWidth : window.innerWidth;

                        $scope.$apply(function () {
                            imgScale(img, el, winHeight, winWidth);

                        });
                    });

                    var img = el.find('img')[0];
                    img.onload = function () {
                        imgScale(img, el, winHeight, winWidth);

                        var breakPoint=1;
                    };
                }
            };
        });
})();
