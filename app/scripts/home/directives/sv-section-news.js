(function () {
    'use strict';

    angular.module('home')
        .directive('svSectionNews', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-section-news.html',
                scope: {},
                bindToController: {
                    sectionName: '@'

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.news = _.filter($rootScope.newsList, function (n) {
                        return n.section == ctrl.sectionName;

                    });

                    $scope.$watch('newsList', function (newsObj) {
                        if (!newsObj) {
                            return;
                        }
                        ctrl.news = _.filter(newsObj, function (n) {
                            return n.section == ctrl.sectionName;

                        });

                    });
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
