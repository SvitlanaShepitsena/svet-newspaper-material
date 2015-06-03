(function () {
    'use strict'

    angular.module('blogs', [])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

				.state("app.all-blogs", {
					url: "/all-blogs", 
					controller:"AllBlogsCtrl",
					templateUrl: "scripts/blogs/views/all-blogsCtrl.html"
				})
//#state'

    });
})();

