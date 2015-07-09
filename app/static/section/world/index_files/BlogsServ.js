(function () {
    'use strict';
    angular.module('blogs')
        .factory('BlogsServ', function ($q, url, users, $firebaseObject, $firebaseArray,svetBlogsConst) {

            var ref = new Firebase(url + 'articles');
            var blogsArr = $firebaseArray(ref);


            function setPublicBlogsLive(blogs) {
                var publicNews = _.where(blogs, {isPublic: true, isBlog: true});
                svetBlogsConst.public = _.sortBy(publicNews, '-timestamp');
            }

            return {
                setBlogsLive: function () {
                    return $q(function (resolve, reject) {
                        blogsArr.$loaded(function () {
                            setPublicBlogsLive(blogsArr);
                            blogsArr.$watch(function () {
                                setPublicBlogsLive(blogsArr);
                            });
                            resolve();
                        })
                    });
                },
            };
        });
})();
