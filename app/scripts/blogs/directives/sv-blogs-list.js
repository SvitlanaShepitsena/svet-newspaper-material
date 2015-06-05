(function () {
    'use strict';

    angular.module('blogs')
        .directive('svBlogsList', function (BlogsServ, svetBlogsConst) {
            return {
                replace: true,
                templateUrl: 'scripts/blogs/directives/sv-blogs-list.html',
                scope: {},
                link: function ($scope, el, attrs) {

                    BlogsServ.setBlogsLive().then(function () {
                        $scope.blogs = svetBlogsConst.public;
                        console.log($scope.blogs);
                    })

                }
            };
        });
})();
