(function () {
    'use strict';

    angular.module('home')
        .directive('svHomeMainNews', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-home-main-news.html',
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    $rootScope.$watch('news', function (newValue) {
                        if (!newValue) {
                            return;
                        }
                        var allNews = _.filter(_.toArray(newValue), function (oneNews) {
                            return _.isObject(oneNews);
                        });

                        ctrl.mainNews = _.last(allNews);
                        ctrl.freshNews = _.take(allNews, allNews.length - 1);

                    });


                },

                link: function ($scope, el, attrs) {


                }
            };
        });
})();
