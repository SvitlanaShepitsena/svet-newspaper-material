(function () {
    'use strict'
    angular.module('blogs', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state("app.blogs", {
                    url: "/blogs",
                    controller: "AllBlogsCtrl",
                    templateUrl: "scripts/blogs/views/all-blogsCtrl.html"
                })
				.state("app.one-blog", {
					url: "/one-blog", 
					controller:"OneBlogCtrl",
					templateUrl: "scripts/blogs/views/one-blogCtrl.html"
				})
//#state'
        });
})();

