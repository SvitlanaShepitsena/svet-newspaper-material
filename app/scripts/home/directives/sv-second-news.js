(function () {
    'use strict';

    angular.module('home')
        .directive('svSecondNews', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-second-news.html',
                scope: {},
                bindToController: {
                    secondNews: '='

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
	                console.log(ctrl.secondNews);
                },

                link: function ($scope, el, attrs) {


                }
            };
        });
})();
