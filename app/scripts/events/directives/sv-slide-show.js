(function () {
    'use strict';

    angular.module('events')
        .directive('svSlideShow', function () {
            return {
                replace: true,
                templateUrl: 'scripts/events/directives/sv-slide-show.html',
                scope: {},
                bindToController: {
                    numb:'=',
                    path:'@',
                    type:'@'

                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    console.log(ctrl.type);
                    ctrl.slides = [];
                    for (var i = 1; i <= ctrl.numb; i++) {
                        var slide = {
                            url:ctrl.path+'/'+i+'.'+ctrl.type
                        }
                        ctrl.slides.push(slide);

                    }

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
