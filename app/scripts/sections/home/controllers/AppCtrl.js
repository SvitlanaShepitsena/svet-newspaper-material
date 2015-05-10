(function () {
    'use strict';
    angular.module('sections.home')
        .controller('AppCtrl', function AppCtrl(NewsProcessServ, ArticleServ,$state, $scope, user, news, $rootScope, toastr, CurrentUserServ) {
            var currentState= _.last(_.keys($state.$current.includes));
            if (currentState.indexOf('app.user')>-1&&user.groups.indexOf('manager')) {
                $state.go('app.manager.dashboard',{uid:user.uid});

            }



            $scope.user = user;
            news.$bindTo($rootScope, "newsObj").then(function () {
            });
            $scope.$watch('newsObj', function (newsObj) {
                if (!newsObj) {
                    return;
                }
                var idCounter = 1;
                var fbKeys = _.slice(_.keys(newsObj), 2);
                newsObj = _.map(_.filter(newsObj, function (newsOne, index) {
                    if (_.isObject(newsOne)) {
                        return true;
                    }
                }), function (news, count) {
                    return _.extend(news, {
                        id: idCounter++,
                        fbkey: fbKeys[count]
                    });
                });
                $rootScope.newsList = _.toArray(newsObj);
                var newsTrioGrid = NewsProcessServ.get(newsObj);
                $rootScope.news = newsTrioGrid.trios;
                $rootScope.newsGrid = newsTrioGrid.newsGrid;
                $rootScope.appLoaded = true;
            });
            $rootScope.$on('error', function () {
                toastr.error('error');
            })
        });
})();

