(function () {
    'use strict';
    angular.module('events')
        .controller('Kohl2015Ctrl', function ($scope) {
            $scope.images = [
                {thumb: '/img/gallery/1th.jpg', img: 'img/gallery/1.jpg', description: 'Image1'},
                {thumb: '/img/gallery/2th.jpg', img: 'img/gallery/2.jpg', description: 'Image2'},
                {thumb: '/img/gallery/3th.jpg', img: 'img/gallery/3.jpg', description: 'Image3'}
            ];
            //(function (d, s, id) {
            //    var js, fjs = d.getElementsByTagName(s)[0];
            //    if (d.getElementById(id)) return;
            //    js = d.createElement(s);
            //    js.id = id;
            //    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";
            //    fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk'));
        });
})();

