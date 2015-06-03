(function () {
    'use strict';
    angular.module('blogs')
        .controller('AllBlogsCtrl', function (BlogsServ, $scope, svetBlogsConst) {
            BlogsServ.setBlogsLive().then(function () {
                $scope.blogs = svetBlogsConst.public;
            })
        });
})();

